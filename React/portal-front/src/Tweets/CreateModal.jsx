export const CreateModal = () => {
    
    return(
        <>
            {/* You can open the modal using ID.showModal() method */}
            <button className="btn btn-lg hover:bg-blue-500 bg-blue-700 text-white fixed bottom-4 right-4 text-lg pl-10 pr-10" onClick={()=>window.my_modal_4.showModal()}>投稿</button>
            <dialog id="my_modal_4" className="modal h-4/6">
            <form method="dialog" className="modal-box max-w-5xl">
                <h3 className="font-bold text-lg">投稿してみましょう！</h3>
                <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-5">✕</button>
                <textarea placeholder="1万文字まで書き込めます。" className="textarea text-lg focus:outline-none w-full max-w-5xl h-96 mt-5" ></textarea>
                <button className="btn hover:bg-blue-500 bg-blue-700 text-white mt-5 float-right">投稿する！</button>
            </form>
            </dialog>
        </>
    );
};