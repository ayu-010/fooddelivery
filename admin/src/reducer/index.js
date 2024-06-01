import { combineReducers } from "@reduxjs/toolkit";

import productReducer from "../slices/productSlice";


const rootReducer=combineReducers({

product:productReducer,
})

export default rootReducer