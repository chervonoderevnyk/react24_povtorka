import {useForm} from "react-hook-form";
import {FC} from "react";

import {IPostModel} from "../models/IPostModel";
import {requests} from "../services/DummyJsonServise";
import {joiResolver} from "@hookform/resolvers/joi";
import {PostValidator} from "../validators/Post.validator";

const PostFormComponent: FC = () => {

let {
      register,
      handleSubmit,
    formState:{errors, isValid}
    } = useForm<IPostModel>({mode:"all", resolver: joiResolver(PostValidator)});

    const AddPost = (addPost:IPostModel) =>{
        // console.log(addPost)

        requests.post.addPost(addPost)
            .then(response => {
                console.log("Response:", response.data)
            })
};

    return (
        <div>
            <form onSubmit={handleSubmit(AddPost)}>
                <input type={'text'} {...register("title")} placeholder={"title"}/>
                {errors.title && <span>{errors.title.message}</span>}
                <br/>

                <input type={"number"} {...register("userId")} placeholder={"user Id"}/>
                {errors.userId && <span>{errors.userId.message}</span>}
                <br/>
                <button disabled={!isValid}>Add post</button>

            </form>
        </div>
    );
};

export {PostFormComponent};