import {configureStore} from "@reduxjs/toolkit";
import historySlice from "./features/history/historySlice.js";

const store = configureStore({
    reducer: {
        history: historySlice
    }
})

export default store;