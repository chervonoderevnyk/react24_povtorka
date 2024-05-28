import React, {useState} from 'react';

import './App.css';
import Characters from "./components/characters/Characters";
import Recipes from "./components/recipes/Recipes";
import Products from "./components/products/Products";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import {requests} from "./services/Dummyjson.api.service";
import {IPostModel} from "./mogels/Post.model";
import Carts from "./components/carts/Carts";
import {CartsModel} from "./mogels/Carts.model";
import {ApishkaLift} from "./components/stateLifting/ApishkaLift";
import {Memomizing} from "./components/memomization/Memomizing";
import OriginalComponent1 from "./components/memomization/OriginalComponent1";
import OriginalComponent2 from "./components/memomization/OriginalComponent2";

const App = () => {

    const [posts, setPosts] = useState<IPostModel[]>([]);

    const lift = (userId:number) => {
        requests.postsUserId.getAllPostsOfUser(userId).then((value) => {
            setPosts(value.data.posts);
        })
    };

    const [carts, setCarts] = useState<CartsModel[]>([]);

    const liftCart = (useId: number) => {
        requests.cartUserId.getCartOfUser(useId).then((value) => {
            setCarts(value.data.carts)
        })
    };

    // const [comments, setComments] = useState<CommentModel[]>([]);
    //
    // const liftComments = (postId: number) =>{
    //     requests.commentsPostId.getCommentsOfPost(postId).then((value)=>{
    //         setComments(value.data.comments)
    //     })
    // };


    return (
    <>

        {/*<Characters/>*/}
        {/*<Recipes/>*/}
        {/*<Products/>*/}

        {/*<div className="App">*/}
        {/*    <Users lift={lift} liftCart={liftCart}/>*/}
        {/*    <Posts posts={posts}/>*/}
        {/*    <Carts carts={carts}/>*/}
        {/*</div>*/}

        {/*<ApishkaLift/>*/}
        {/*<Memomizing/>*/}
        <OriginalComponent1/>
        <OriginalComponent2/>
    </>
    );
};

export default App;
