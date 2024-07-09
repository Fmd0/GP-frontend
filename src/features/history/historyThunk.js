import axios from "axios";
import {addHistory} from "./historySlice.js";


const submitFormThunk = async (formData, thunkAPI) => {
    try {
        const {data} = await axios.post(`${import.meta.env.VITE_API_ADDRESS}/upload`, formData);
        data
        thunkAPI.dispatch(addHistory(data));
        return data;
    }
    catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue('error');
    }
}

export {
    submitFormThunk,
}