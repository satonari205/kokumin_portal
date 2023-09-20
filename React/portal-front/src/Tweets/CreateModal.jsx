import {auth,headers} from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

const CreateModal = () => {
    const [content,setContent] = useState();
    // const [image1,setImage1] = useState();
    // const [image2,setImage2] = useState();
    const navigate = useNavigate();

    const createTweet = (data) => {
        navigate('/');
    }

    return(
        <>
            <button
                className="btn btn-md md:btn-lg hover:bg-blue-500 bg-blue-700 text-white fixed bottom-4 right-4 xl:right-52 text-lg pl-8 pr-8"
                onClick={()=>window.my_modal_4.showModal()}
            >
                投稿
            </button>
            <dialog id="my_modal_4" className="modal">
            <form
                method="dialog"
                className="modal-box max-w-5xl"
                onSubmit={createTweet}
            >
                <h3 className="font-bold text-lg">投稿してみましょう！</h3>
                <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-5">✕</button>
                <textarea
                    placeholder="1万文字まで書き込めます。"
                    className="textarea text-lg focus:outline-none w-full max-w-5xl h-96 mt-5"
                    onChange={(e)=>setContent(e.target.value)}
                >
                </textarea>
                <div className="flex flex-wrap flex-col  md:flex-row md:justify-between">
                    <div className="flex items-center gap-4">
                        <div className="items-center justify-center bg-grey-lighter">
                            <label className="w-24 flex items-center px-2 py-2 rounded-lg tracking-wide uppercase border border-gray cursor-pointer">
                                <span className="mr-2">1枚目</span>
                                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <input
                                    type='file'
                                    className="hidden"
                                    // onChange={(e)=>setimage1(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="items-center justify-center bg-grey-lighter">
                            <label className="w-24 flex items-center px-2 py-2 rounded-lg tracking-wide uppercase border border-gray cursor-pointer">
                                <span className="mr-2">2枚目</span>
                                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <input
                                    type='file'
                                    className="hidden"
                                    // onChange={(e)=>setImage2(e.target.value)}
                                />
                            </label>
                        </div>
                    </div>
                    <button className="btn w-28 hover:bg-blue-500 bg-blue-700 text-white mt-5">投稿する！</button>
                </div>
            </form>
            </dialog>
        </>
    );
};

export default CreateModal;