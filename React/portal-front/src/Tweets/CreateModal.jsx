export const CreateModal = () => {
    return(
        <>
            {/* You can open the modal using ID.showModal() method */}
            <button className="btn btn-md md:btn-lg  hover:bg-blue-500 bg-blue-700 text-white fixed bottom-4 right-4 xl:right-52 text-lg pl-8 pr-8" onClick={()=>window.my_modal_4.showModal()}>投稿</button>
            <dialog id="my_modal_4" className="modal">
            <form method="dialog" className="modal-box max-w-5xl">
                <h3 className="font-bold text-lg">投稿してみましょう！</h3>
                <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-5">✕</button>
                <textarea placeholder="1万文字まで書き込めます。" className="textarea text-lg focus:outline-none w-full max-w-5xl h-96 mt-5" ></textarea>
                <div className="flex flex-warp flex-col  lg:flex-row lg:justify-between">
                    <div>
                        <input type="file" className="file-input file-input-sm"/>
                        <input type="file" className="file-input file-input-sm mt-2"/>
                    </div>
                    <button className="btn w-28 hover:bg-blue-500 bg-blue-700 text-white mt-5">投稿する！</button>
                </div>
            </form>
            </dialog>
        </>
    );
};