import TextareaAutosize from 'react-textarea-autosize';
import auth from "../api/auth";
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../context/userContext";

const CreateForm = () => {
    const [content,setContent] = useState("");
    const [image1,setImage1] = useState();
    const [image2,setImage2] = useState();
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const formData = new FormData();
        formData.append('content', content);
        if(image1){
            formData.append('image1', image1);
        }
        if(image2){
            formData.append('image2', image2);
        }

    const createTweet = async () => {
        await auth.post('tweets/create/',
            {
                "content": content,
                "image1": image1,
                "image2": image2,
                "user": user.id,
            },
            {headers: {
                'Content-Type': 'multipart/form-data',
            }},
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!user){
            alert('ログインが必要です。');
            navigate('/login');
        }
        else if (!content && !image1 && !image2) {
            alert('コンテンツまたは画像を入力してください。');
        }
        else{
            createTweet();
            alert('投稿されました');
            setContent("");
            setImage1(null);
            setImage2(null);
        }
    }

    const setText = (e) => {
        const text = e.target.value;
        if(!user){
            alert('ログインが必要です。');
            navigate('/login');
        }
        else{
            setContent(text);
        }
    }

    const setFile = (e) => {
        const files = e.target.files;
        if(!user){
            alert('ログインが必要です。');
            navigate('/login');
        }
        if (files.length === 1){
            setImage1(files[0]);
        }
        else if(files.length === 2){
            setImage1(files[0]);
            setImage2(files[1]);
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
                    className="p-3 font-bold text-center"
                >
                    ↓ 投稿してみましょう！ ↓
                </label>
                <TextareaAutosize
                    id="tweet"
                    className="textarea h-96 textarea-bordered"
                    placeholder="1万文字まで入力できます"
                    value={content}
                    onChange={setText}
                />
                <div className="flex justify-between items-end my-3">
                    <div className='flex flex-col gap-2'>
                        <input
                            type="file"
                            className="file-input file-input-bordered file-input-xs max-w-xs"
                            onChange={setFile}
                        />
                        <input
                            type="file"
                            className="file-input file-input-bordered file-input-xs max-w-xs"
                            onChange={setFile}
                        />
                    </div>
                    <div className='items-end'>
                        <button
                            className="btn btn-sm h-7 hover:bg-blue-500 bg-blue-700 text-white"
                            // onClick={onNewTweet}
                        >
                            投稿
                        </button>
                    </div>
                </div>
                <div className="divider my-0"></div>
            </form>
        </>
    );
};

export default CreateForm;