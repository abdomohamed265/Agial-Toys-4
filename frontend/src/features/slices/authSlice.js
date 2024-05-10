import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: "",
        token: "",
        email: "",
        id: "",
        logged: false
    },
    reducers: {
        setUser(state, action) {
            state.token = action.payload;
            console.log(action.payload);
            const decoded = jwtDecode(action.payload);
            state.email = decoded.userMail;
            state.id = decoded.userID;
            state.logged = true;
        }
    }
})

export const { setUser } = authSlice.actions;
export default authSlice.reducer