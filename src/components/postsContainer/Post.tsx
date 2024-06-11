import {FC, PropsWithChildren} from "react";
import {IPost} from "../../interfaces/PostInterface";

interface IProps extends PropsWithChildren {
    post: IPost
}

const Post: FC<IProps> = (
    {post}
) => {

    const {id, title} = post;

    return (
        <div>
            <div>id: {id}</div>
            <div>title :{title}</div>
            <hr/>
        </div>
    );
};

export {Post};