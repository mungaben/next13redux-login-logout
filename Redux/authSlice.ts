



// create an auth slice with login and logout 


import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initailtypes = {
    isAuth: boolean,
    user: {
        name: string,
    }
}


const initialstate = {
    isAuth: false,
    user: {
        name: "",
    }
}as initailtypes;

export const authslice = createSlice({
    name: "authSlice",
    initialState: initialstate,
    reducers:{
        logIn:(state,action:PayloadAction<string>)=>{
            return{
                isAuth:true,
                user:{
                    name:action.payload
                }
            }
        },
        logOut:()=>{
            return initialstate
        },
    },
})


export const { logIn, logOut } = authslice.actions;
// export reducer as default
export default authslice.reducer;