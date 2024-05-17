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

const App = () => {

    const [posts, setPosts] = useState<IPostModel[]>([]);

    const lift = (userId:number) => {
        // requests.postsUserId.getAllPostsOfUser(userId).then(({data}) => {
        requests.postsUserId.getAllPostsOfUser(userId).then((value) => {
            setPosts(value.data.posts);
        })
    };

    const [carts, setCarts] = useState<CartsModel[]>([]);

    const liftCart = (useId: number) => {
        requests.cartUserId.getCartOfUser(useId).then((value) => {
            setCarts(value.data.carts)
        })
    }

    return (
    <>

        {/*<Characters/>*/}
        {/*<Recipes/>*/}
        {/*<Products/>*/}
        <div className="App">
            <Users lift={lift} liftCart={liftCart}/>
            <Posts posts={posts}/>
            <Carts carts={carts}/>
        </div>
    </>
    );
};

export default App;
