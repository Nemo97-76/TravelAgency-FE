import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import baseURL from "../../../utils/basURL.js";
//inital state
const initialState = {
    loading: false,
    error: null,
    users: [],
    user: {},
    profile: {},
    userAuth: {
        loading: false,
        error: null,
        userInfo: {},
    }
}

//login action
export const loginUserAction = createAsyncThunk(
    "/login",
    async ({ email, password }, { rejectWithValue, getState, dispatch }) => {
        try {
            //make the http request
            const { data } = await axios.post(`${baseURL}/user/signin`, {
                email,
                password,
            });
            return data
        } catch (error) {
            console.log(error)
            return rejectWithValue(error?.response?.data)
        }
    })
// users slice
const userSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
        //handle actions
        //login
        builder.addCase(loginUserAction.pending, (state, action) => {
            state.userAuth.loading = true;
        })
        builder.addCase(loginUserAction.fulfilled, (state, action) => {
            state.userAuth.userInfo = action.payload;
            state.userAuth.loading = false;

        })
        builder.addCase(loginUserAction.rejected, (state, action) => {
            state.userAuth.error = action.payload;
            state.userAuth.loading = false;
        })
    },
})

//generate reducer
const userReducer = userSlice.reducer;
export default userReducer