import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import './App.css';
import {HeaderComponent} from "./component/HeaderComponent";
import {MyContext} from "./context/ContextProvider";
import {IUserModel} from "./models/IUserModel";
import {IPostModel} from "./models/IPostModel";
import {postService, userService} from "./services/ApiService";

const App = () => {

    const [users, setUsers] = useState<IUserModel[]>([])
    const [posts, setPosts] = useState<IPostModel[]>([])
    const [favoriteUserState, setFavoriteUserState] = useState<IUserModel | null>(null)

    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.data))
        postService.getPosts().then(value => setPosts(value.data))
    }, []);

   const setFavoriteUser = (obj: IUserModel) => {
       setFavoriteUserState(obj)
   }

    return (
        <div>
            <MyContext.Provider value={
                {
                    userStore: {
                        allUsers: users,
                        setFavoriteUser: (obj: IUserModel) => setFavoriteUser(obj)
                    },
                    postStore: {
                        allPosts: posts
                    }
                }
            }>
                <HeaderComponent/>
                <Outlet/>
            </MyContext.Provider>
            <hr/>
            {favoriteUserState && <div>{favoriteUserState.email}</div>}
            <hr/>
        </div>
    );
};

export default App;
