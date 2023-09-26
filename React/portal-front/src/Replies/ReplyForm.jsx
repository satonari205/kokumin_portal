import { useState,useContext } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import auth from '../api/auth';
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

    const PostReply = async (data) => {
        await auth.post('repleis/create/',
            {
                "content": content,
                "image": image,
                "user": user.id,
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
        else{
            PostReply();
            navigate(`/replies/${tweetId}`);
        }
    }

    const setFile = (e) => {
        const files = e.target.files
        if (files){
            setImage({
                file: files[0],
                fileName: files[0].name
            });
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
                    onChange={(e)=>{setContent(e.target.value)}}
                />
                <div className="flex items-center justify-end">
                    <div className="items-center justify-center bg-grey-lighter">
                        <label className="flex items-center gap-2 px-4 py-2 rounded-lg tracking-wide uppercase cursor-pointer">
                            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                            </svg>
                            <input
                                type='file'
                                className="hidden"
                                onChange={setFile}
                            />
                            <span className='text-xs'>
                            {/* {
                                image && image.files[0]
                                ? image.files[0].name : ""
                            } */}
                            </span>
                        </label>
                    </div>
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