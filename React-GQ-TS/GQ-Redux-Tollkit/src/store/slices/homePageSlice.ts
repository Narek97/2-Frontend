import {createSlice} from "@reduxjs/toolkit";


const initialState: any = {
    animePage: null
};

const HomePageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {
        setAnimePage(state, action) {
            state.animePage = action.payload;
        }
    },
});

export const {} = HomePageSlice.actions;

export default HomePageSlice.reducer;