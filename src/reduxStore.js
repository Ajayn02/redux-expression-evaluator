import { configureStore } from "@reduxjs/toolkit";
import calcSlice from "./calcSlice";

const store=configureStore({
    reducer:{
            calcReducer:calcSlice
    }
})

export default store