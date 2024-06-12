import {FC} from "react";
import {IPostModel} from "../../models/IPostModel";

const Post:FC<IPostModel> = ({id, title}) => {
    return (
        <div>
            <div>{id}. {title}</div>
            <hr/>
        </div>
    );
};

export {Post};