import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./UserSlice";
import {useDispatch, useSelector} from "react-redux";
import {postSlice} from "./PostsSlice";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer
    }
});

export const useAddDispatch =
    useDispatch.withTypes<typeof store.dispatch>();

export const useAppSelector =
    useSelector.withTypes<ReturnType<typeof  store.getState>>();