import {useForm} from "react-hook-form";
import {IPostModel} from "../models/IPostModel";
import {FC} from "react";

const PostFormComponent: FC = () => {

let {
      register,
      handleSubmit
    } = useForm<IPostModel>()

    const AddPost = (addPost:IPostModel) =>{
        // console.log(addPost)

        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: addPost.title,
                userId: addPost.userId,
            })
        })
            .then(res => res.json())
        .then(data=> {
            console.log("Responce:", data)});
};

    return (
        <div>
            <form onSubmit={handleSubmit(AddPost)}>
                <input type={'text'} {...register("title")} placeholder={"title"}/>
                <br/>
                <input type={"number"} {...register("userId")} placeholder={"user Id"}/>
                <br/>
                <button>Add post</button>

            </form>
        </div>
    );
};

export {PostFormComponent};