import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getFromSessionStorage, setSessionStorage} from "../../utils/sessionStorage.js";
import {submitFormThunk} from "./historyThunk.js";


const initialState = {
    histories: getFromSessionStorage(),
    submitState: 'init',
    currentId: '',
}

export const submitForm =
    createAsyncThunk('history/submitForm', submitFormThunk);

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
        },
        clearStatus: (state) => {
            state.submitState = 'init';
        }
    },
    extraReducers: builder => {
        builder
            .addCase(submitForm.pending, (state) => {
                state.submitState = 'loading';
            })
            .addCase(submitForm.fulfilled,(state, {payload}) => {
                state.submitState = 'success';
                state.currentId = payload.id;
            })
    }
})

export const {
    addHistory,
    deleteHistory,
    clearStatus
} = historySlice.actions;

export default historySlice.reducer;