import axios from "axios";
import {toast} from "react-toastify";
import {addHistory} from "./historySlice.js";


const submitFormThunk = async (formData, thunkAPI) => {
    try {
        const {data} = await toast.promise(
            axios.post(`${import.meta.env.VITE_API_ADDRESS}/upload`, formData),
            {
                pending: "服务端处理中",
                success: "处理成功",
                error: "处理失败"
            }
        );
        thunkAPI.dispatch(addHistory(data));
        return data;
    }
    catch (error) {
        thunkAPI.rejectWithValue(error);
    }
}

export {
    submitFormThunk,
}