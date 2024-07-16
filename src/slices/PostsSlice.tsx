import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsService} from "../services/ApiService";
import {IPost} from "../models/IPost";
import {AxiosError} from "axios";

type PostSliceType = {
    posts: IPost[],
    postsByUserId: IPost | null
}

const postInitState: PostSliceType = {
    posts: [],
    postsByUserId: null
}

const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await postsService.getAll()
            return thunkAPI.fulfillWithValue(posts)
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)

  const loadPostsByUserId = createAsyncThunk(
    'postSlice/loadPostsByUserId',
    async (userId: string | undefined, thunkAPI) => {
        if (userId) {
            try {
                const posts = await postsService.getByUserId(userId);
                return thunkAPI.fulfillWithValue(posts);
            } catch (e) {
                const error = e as AxiosError;
                return thunkAPI.rejectWithValue(error.response?.data);
            }
        }
        return [];
    }
);


    export const postSlice = createSlice({
        name: 'postSlice',
        initialState: postInitState,
        reducers: {
            // changeLoadState: (state, actions: PayloadAction<boolean>) => {
            //     state.isLoaded = actions.payload
            },
        extraReducers: builder => builder
            .addCase(
                loadPosts.fulfilled,
                (state, action) => {
                    state.posts = action.payload
                })
            .addCase(loadPosts.rejected,
                (state, action)=>{})

            .addCase(loadPostsByUserId.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
            .addCase(loadPostsByUserId.rejected, (state, action) => {})
        })


export const postActions = {
    ...postSlice.actions,
    loadPosts,
    loadPostsByUserId
}

