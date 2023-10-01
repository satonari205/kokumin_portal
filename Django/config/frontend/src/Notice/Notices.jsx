import Notice from "./Notice";

const Notices = () => {
    return(
        <>
            <div className="flex flex-col divide-y mr-auto ml-auto max-w-xl">
            <div className="p-4 text-center font-bold text-xl">通知</div>
                {/* {noticeList.map(() => ( */}
                    <Notice />
                {/* ))} */}
            </div>
        </>
    );
};

export default Notices;