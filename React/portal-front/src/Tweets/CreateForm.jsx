import TextareaAutosize from 'react-textarea-autosize';
import auth from "../api/auth";
import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";

const CreateForm = () => {
    const [content,setContent] = useState("");
    const [image1,setImage1] = useState("");
    const [image2,setImage2] = useState("");
    const { user } = useContext(UserContext);

    const formData = new FormData();
        // formData.append('user', user.id);
        formData.append('content', content);
        if(image1){
            formData.append('image', image1);
        }
        if(image2){
            formData.append('image', image1);
        }

    const createTweet = async (data) => {
        await auth.post('tweets/create/',
            {
                "content": content,
                "image1": image1,
                "image2": image2,
                "user": user.id,
            }
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createTweet();
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
                    onChange={(e)=>{setContent(e.target.value)}}
                />
                <div className="flex flex-wrap justify-end items-center my-3">
                    <div className="flex items-center gap-4">
                        <div className="items-center justify-center bg-grey-lighter">
                            <label className="w-10 flex items-center px-2 py-2 rounded-lg tracking-wide uppercase cursor-pointer">
                                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <input
                                    type='file'
                                    className="hidden"
                                    onChange={(e)=>setImage1(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="items-center justify-center bg-grey-lighter">
                            <label className="w-10 flex items-center px-2 py-2 rounded-lg tracking-wide uppercase cursor-pointer">
                                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <input
                                    type='file'
                                    className="hidden"
                                    onChange={(e)=>setImage2(e.target.value)}
                                />
                            </label>
                        </div>
                        <button className="btn btn-sm h-7 items-center hover:bg-blue-500 bg-blue-700 text-white">
                            <span>
                                投稿する！
                            </span>
                        </button>
                    </div>
                </div>
                <div className="divider my-0"></div>
            </form>
        </>
    );
};

export default CreateForm;