import { createSlice } from '@reduxjs/toolkit';


const initialState= {
   
    productData:null,
    loading:false,
   
}


const productSlice=createSlice({
    name:"product",
    initialState:initialState,
    reducers:{
      
        setLoading(state,value){
            state.loading=value.payload
        },
        setProductData(state,value){
            state.productData=value.payload 
        }
    },
});

export const {setLoading,setProductData}=productSlice.actions;
export default productSlice.reducer;