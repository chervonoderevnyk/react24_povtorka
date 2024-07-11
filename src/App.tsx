import React from 'react';

import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/Store";
import {decrement, decrementByAmount, increment, incrementByAmount} from "./slices/Slice1";

const App = () => {

    const {value} = useAppSelector((state) => state.slice1);

    const dispatch = useAppDispatch();

    return (
        <div>
            <h2>{value}</h2>

            <button onClick={()=>{
                dispatch(increment())
            }}>increment</button>

            <button onClick={()=> {
                dispatch(decrement())
            }}>decrement</button>

            <button onClick={()=> {
                dispatch(incrementByAmount(13))
            }}>incrementByAmount</button>

            <button onClick={() => {
                dispatch(decrementByAmount(13))
            }}>decrementByAmount</button>
        </div>
    );
};

export default App;
