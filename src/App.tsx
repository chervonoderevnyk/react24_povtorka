import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";

import './App.css';
import {HeaderComponent} from "./component/HeaderComponent";
import {postService, userService} from "./services/ApiService";
import {useStore} from "./context/Store";

const App = () => {

    const {userStore,postStore} = useStore();

    useEffect(() => {
        userService.getUsers().then(value => userStore.loadUsers(value.data))
    }, []);

    useEffect(() => {
        postService.getPosts().then(value => postStore.loadPosts(value.data))
    }, []);


    return (
        <div>
            <HeaderComponent/>
            <Outlet/>

            <hr/>
            {userStore.favoriteUser && <div>{userStore.favoriteUser.email}</div>}
            <hr/>
        </div>
    );
};

export default App;
