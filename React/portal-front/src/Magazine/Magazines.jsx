import { Magazine } from "./Magazine";
import { CreateModal } from './../Tweets/CreateModal';

export const Magazines = () => {
    return(
        <>
        <div className="p-4 text-center divider-y">マガジン(仮)</div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl justify-center mx-auto p-3">
        {/* {magazineList.map((mgazine) => ( */}
            <Magazine />
            <Magazine />
            <Magazine />
            <Magazine />
            <Magazine />
            <Magazine />
            <Magazine />
        {/* ))} */}
        </div>
        </>
    );
};