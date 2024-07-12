import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TextColorState {
    text: string;
    color: string;
}

const initialState: TextColorState = {
    text: 'black',
    color: 'black',
};

const textColorSlice = createSlice({
    name: 'textColor',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
        setColor: (state, action: PayloadAction<string>) => {
            state.color = action.payload;
        },
    },
});

export const { setText, setColor } = textColorSlice.actions;
export default textColorSlice.reducer;
