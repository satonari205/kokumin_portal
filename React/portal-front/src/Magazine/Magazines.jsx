import { Magazine } from "./Magazine";

export const Magazines = () => {
    return(
        <>
        <div className="p-4 text-center divider-y">マガジン(仮)</div>
        {/* {magazineList.map((mgazine) => ( */}
            <Magazine />
            <Magazine />
            <Magazine />
            <Magazine />
        {/* ))} */}
        </>
    );
};