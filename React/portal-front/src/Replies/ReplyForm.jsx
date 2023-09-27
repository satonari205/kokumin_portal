import TextareaAutosize from 'react-textarea-autosize';
import auth from '../api/auth';
import { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../context/userContext";

const ReplyForm = ({tweetId}) => {
    const [content,setContent] = useState("");
    const [image,setImage] = useState(null);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const formData = new FormData();
        formData.append('content', content);
        if(image){
            formData.append('image', image);
        }

    const CreateReply = async () => {
        await auth.post('replies/create/',
            {
                "tweet": tweetId,
                "user": user.id,
                "content": content,
                "image": image,
            },
            {headers: {
                'Content-Type': 'multipart/form-data',
            }},
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!user){
            alert('ログインが必要です。');
            navigate('/login')
        }
        else if(!content && !image){
            alert('コンテンツまたは画像を入力してください。');
        }
        else{
            CreateReply();
            setContent("");
            setImage(null);
        }
    }

    const setFile = (e) => {
        const files = e.target.files;
        console.log(files);
        if(!user){
            alert('ログインが必要です。');
            navigate('/login');
        }
        if (files.length === 1){
            setImage(files[0]);
        }
        else{
            console.log("else");
        }
    }

    return(
        <>
            <form
                className="flex flex-col"
                onSubmit={handleSubmit}
            >
                <label
                    htmlFor="reply"
                    className="p-3 font-bold"
                >
                    ↓ コメントしてみましょう！ ↓
                </label>
                <TextareaAutosize
                    id="reply"
                    className="textarea h-96 textarea-bordered"
                    placeholder="1万文字まで入力できます"
                    value={content}
                    onChange={(e)=>{setContent(e.target.value)}}
                />
                <div className="flex items-start justify-between px-1">
                    <input
                        type="file"
                        className="file-input file-input-bordered file-input-xs mt-3"
                        onChange={setFile}
                    />
                    <button
                        className="btn btn-sm hover:bg-blue-500 bg-blue-700 text-white text-md md:text-sm m-3 mr-0"
                    >
                        コメントする
                    </button>
                </div>
            </form>
        </>
    );
}

export default ReplyForm;