import {useState} from "react";
import { Vortex } from "react-loader-spinner";
import Magazine from "./Magazine";

const Magazines = () => {
    const [isLoading,setLoading] = useState(true);
    return(
        <>
        { isLoading
            ? (
                <div className="mx-auto mt-10 w-16 -translate-x-2">
                    <Vortex
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="vortex-loading"
                        wrapperStyle={{}}
                        wrapperClass="vortex-wrapper"
                        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                    />
                </div>
            ) : (
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
            )
        }
        </>
    );
};

export default Magazines;