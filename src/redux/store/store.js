import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/users/usersSlice.js";
//store
const store = configureStore({
    reducer: {
        users: userReducer
    }
})
export default store