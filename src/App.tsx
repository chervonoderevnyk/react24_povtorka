import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {AppDispatch, RootState} from "./store";
import {setColor, setText} from "./textColorSlice";

const App: React.FC = () => {

    const dispatch:AppDispatch = useDispatch();
    const { text, color } = useSelector((state: RootState) => state.textColor);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setText(e.target.value));
    };

    const handleButtonClick = () => {
        dispatch(setColor(text));
    };

    return (
        <div>
            <p style={{ color }}>
                Progressively effective resources via business metrics.
            </p>
            <br />

            <div className='inputBtn-container'>
                <input
                    type='text'
                    className='input'
                    value={text}
                    onChange={handleInputChange}
                />
                <button className='btn' onClick={handleButtonClick}>
                    Change text color
                </button>
            </div>
        </div>
    );
};

export default App;
