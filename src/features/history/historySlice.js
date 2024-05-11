import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getFromSessionStorage, setSessionStorage} from "../../utils/sessionStorage.js";
import {submitFormThunk} from "./historyThunk.js";
import {toast} from "react-toastify";


const initialState = {
    histories: getFromSessionStorage(),
    submitState: 'init',
    currentId: '',
    toastId: '',
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
                state.toastId = toast.loading("服务端处理中");
            })
            .addCase(submitForm.fulfilled,(state, {payload}) => {
                state.submitState = 'success';
                state.currentId = payload.id;
                toast.update(state.toastId, { render: "处理成功", type: "success", isLoading: false, autoClose: 1000 });
            })
            .addCase(submitForm.rejected, (state) => {
                // console.log('submitForm.rejected',payload);
                state.submitState = 'error';
                toast.update(state.toastId, { render: "处理失败", type: "error", isLoading: false, autoClose: 1000 });
            })
    }
})

export const {
    addHistory,
    deleteHistory,
    clearStatus
} = historySlice.actions;

export default historySlice.reducer;