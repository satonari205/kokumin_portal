const ReplyForm = () => {
    return(
        <>
            <section className="flex flex-col">
                <label
                    htmlFor="reply"
                    className="p-3 font-bold"
                >
                    ↓ コメントしてみましょう！ ↓
                </label>
                <textarea
                    id="reply"
                    className="textarea h-96 textarea-bordered"
                    placeholder="1万文字まで入力できます"
                >
                </textarea>
                <div className="flex items-center justify-end">
                    <div className="items-center justify-center bg-grey-lighter">
                        <label className="w-12 flex flex-col items-center px-4 py-2 rounded-lg tracking-wide uppercase border border-gray cursor-pointer">
                            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                            </svg>
                            <input type='file' className="hidden" />
                        </label>
                    </div>
                    <button className="btn md:btn-lg hover:bg-blue-500 bg-blue-700 text-white w-28 text-xs md:text-sm m-3 mr-0">コメントする</button>
                </div>
            </section>
        </>
    );
}

export default ReplyForm;