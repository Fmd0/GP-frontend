import {createSlice} from "@reduxjs/toolkit";
import {getFromSessionStorage, setSessionStorage} from "../../utils/sessionStorage.js";


const initialState = {
    histories: getFromSessionStorage(),
}

const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        addHistory: (state, {payload}) => {
            state.histories.push(payload)
            setSessionStorage(state.histories)
        },
        deleteHistory: (state, {payload}) => {
            state.histories = state.histories.filter(h => h.id !== payload)
            setSessionStorage(state.histories)
        }
    }
})

export const {
    addHistory,
    deleteHistory
} = historySlice.actions;

export default historySlice.reducer;