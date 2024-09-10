import { createSlice } from "@reduxjs/toolkit";

const calcSlice=createSlice({
    name:"Calc",
    initialState:{
        result:""
    },
    reducers:{
        calculate(state,action){
            state.result=eval(action.payload)
        },
        clear(state,action){
            state.result=""
            action.payload("")
        }
    }
})

export default calcSlice.reducer
export const {calculate,clear}=calcSlice.actions