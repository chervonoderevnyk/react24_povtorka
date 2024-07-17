import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICar} from "../../inerface/carInterface";
import {IPagination} from "../../inerface/paginationInterface";
import {carService} from "../../services/carService";


interface IState {
    cars: ICar[]
}

let initialState:IState = {
    cars: []
}

const getAll = createAsyncThunk<IPagination<ICar>, void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data
        }catch (e) {
            return rejectWithValue(e)
    }}
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload.items
            })
});

 const {reducer: carReducer, actions} = carSlice;
 const carActions = {...actions, getAll}

export {carReducer, carActions}