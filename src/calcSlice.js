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
        clear(state){
            state.result=0
        }
    }
})

export default calcSlice.reducer
export const {calculate,clear}=calcSlice.actions