import {FC} from "react";
import {useSearchParams} from "react-router-dom";

import {PaginatedModel} from "../models/PaginatedModel";

interface IProps {
    prev: PaginatedModel | null,
    next: PaginatedModel | null,
}

const PaginationComponent:FC<IProps> = ({next, prev}) => {

    const [query, setQuery] = useSearchParams({page: '1'});

    function changePage(arg0: string) {
        switch (arg0) {
            case 'next':
                setQuery({...next});
                break;
            case 'prev':
                setQuery({...prev});
                break;
        }
    }

    return (
        <div>
            <button
                disabled={!prev}
                onClick={ ()=> {changePage('prev')
            }}>prev</button>

            <button
                disabled={!next}
                onClick={ ()=> {changePage('next')
            }}>next</button>

        </div>
    );
};

export {PaginationComponent};