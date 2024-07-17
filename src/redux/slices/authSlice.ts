import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {IUser} from "../../inerface/userInterface";
import {IAuth} from "../../inerface/authInterface";
import {authService} from "../../services/authService";

interface IState{
    me: IUser,
    error: boolean
}

let initialState: IState = {
    me: null,
    error: null
}

const login = createAsyncThunk<IUser, {user:IAuth}>(
    "authSlice/login",
    async ({user}, {rejectWithValue}) => {
        try {
            return await authService.login(user)
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

const me = createAsyncThunk<IUser, void>(
    'authSlice/me',
    async (_, {rejectWithValue})=>{
        try {
            const {data} = await authService.me();
            return data
        }catch (e) {
            return rejectWithValue(e)
        }
    }
)

const  authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.me = action.payload
            })
            .addCase(me.fulfilled, (state, action)=> {
                state.me = action.payload
            })
            .addMatcher(isFulfilled(login), state => {
                state.error = false
            })
            .addMatcher(isRejected(login), state => {
                state.error = true
            })
});

const {reducer:authReducer, actions} = authSlice;

const authActions = {
    ...actions,
    login,
    me
}

export {
    authReducer,
    authActions
}