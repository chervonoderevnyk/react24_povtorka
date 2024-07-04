import {FC} from "react";
import {IPaginatedPage} from "../models/IPaginatedPage";

interface IProps {
    changePage:(action:string)=>void;
    next: IPaginatedPage | null;
    prev: IPaginatedPage | null;
}

const PaginationComponent:FC<IProps> = ({changePage, prev, next}) => {
    return (
        <div>
            <button onClick={()=> {
                changePage('prev')
            }}
            disabled={!prev}
            >prev</button>

            <button onClick={()=> {
                changePage('next')
            }}
            disabled={!next}
            >next</button>
        </div>
    );
};

export {PaginationComponent};