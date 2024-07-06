import {UserPostsComponent} from "../component/UserPostsComponent";
import {useContextProvider} from "../context/ContextProvider";
import {useEffect, useMemo, useState} from "react";
import {UserWithPostsType} from "../models/UserWithPostsType";

const UserPostsPage = () => {

    const {userStore:{allUsers}, postStore:{ allPosts}} = useContextProvider();

    const [userWithPostsState, setUserWithPostsState] = useState<UserWithPostsType[]>([])

    const usersWithPostsArray = useMemo(() => {
        return allUsers.map(user => {
            return {...user, posts: allPosts.filter(post => post.userId === user.id)}
        })
    }, [allUsers, allPosts])

    useEffect(() => {
        setUserWithPostsState(usersWithPostsArray)
    }, [usersWithPostsArray]);

    return (
        <div>
            <UserPostsComponent items= {userWithPostsState}/>
        </div>
    );
};

export {UserPostsPage};