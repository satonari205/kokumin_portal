const ReplyForm = () => {
    return(
        <>
            <section className="flex flex-col">
                <label
                    htmlFor="reply"
                    className="p-3 font-bold"
                >
                    タッチしてフォームを表示
                </label>
                <textarea
                    id="reply"
                    className="textarea h-96"
                    placeholder="1万文字まで入力できます"
                >
                </textarea>
                <div className="flex items-center justify-between">
                    <input type="file" className="file-input file-input-bordered file-input-sm w-full max-w-xs" />
                    <button className="btn w-32 ml-auto m-3">コメントする</button>
                </div>
            </section>
        </>
    );
}

export default ReplyForm;