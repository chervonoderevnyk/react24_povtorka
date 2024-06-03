import {useForm} from "react-hook-form";
import {IPostModel} from "../models/IPostModel";
import {FC} from "react";

const PostFormComponent: FC = () => {
const

let {
      register,
      handleSubmit
    } = useForm<IPostModel>()

    const AddPost = (addPost:IPostModel) => {console.log(addPost)};

    return (
        <div>
            <form onSubmit={handleSubmit(AddPost)}>
                <input type={'text'} {...register("title")}/>
                <br/>
                <input type={"number"} {...register("userId")}/>
                <br/>
                <button>Add post</button>

            </form>
        </div>
    );
};

export {PostFormComponent};