import { configureStore } from "@reduxjs/toolkit";
import GetComponentSlice from "./slice/getcomponentsslice";

const Store = configureStore({
    reducer:{
        
        getComponent:GetComponentSlice.reducer,
        
    }
});

export default Store;