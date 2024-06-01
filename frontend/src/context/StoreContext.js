import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const StoreContext=createContext(null);


const StoreContextProvider=(props) =>
{
     const[cartItems,setCartItems]=useState({});
     const url='http://localhost:4003'

    const[food_list,setFoodList]=useState([]);
     const [token,settoken]=useState("");


     const addToCart=(itemId)=>
     {
        if(!cartItems[itemId])
        {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
     }

     const removeFromCart=(itemId)=>
     {

            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
       
     }


      const getTotalCartAmount=()=>
      {
        let totalAmount=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo=food_list.find((product)=> product._id===item);
                totalAmount +=itemInfo.price*cartItems[item];
            }
        }
        return totalAmount;
      }
    //  useEffect(()=>
    // {
    //     console.log(cartItems);
    // },[cartItems]);
   
 const   fetchFoodList= async ()=>
    {
const response= await axios.get(url+"/api/v1/list")
console.log("resonse inside the app context  which include the food list is ",response);
 setFoodList( response.data.data);

    }


    useEffect(()=>
        {

            async function loadData()
            {
            await  fetchFoodList();
            
            if (localStorage.getItem("token")) {
                settoken(localStorage.getItem("token"))
            } 
}
loadData();
    },[])

    
    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        settoken
    }

    return(
        <StoreContext.Provider value={contextValue}>
{props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider