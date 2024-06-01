import { toast } from "react-hot-toast"

import { setLoading } from "../../slices/productSlice"
import { apiConnector } from "../apiconnector"
import { endpoints } from "../api"

const {
  ADD_PRODUCT_API,
LIST_PRODUCT_API,
DELETE_PRODUCT_API
} = endpoints


export function addProduct(
   name,description,category,price,Foodimage
  ) {
    return async (dispatch) => {
      console.log("valu of imagee inside the auth pi is ",Foodimage);
        console.log("api of add product is ",ADD_PRODUCT_API);
      const toastId = toast.loading("Loading...")
      // dispatch(setLoading(true))
      try {
        // const imageData = image ? image : null;




        
        const response = await apiConnector("POST", ADD_PRODUCT_API,
         { name,description,category,price,Foodimage
      },{'Content-Type': 'multipart/form-data'})
  console.log("yeha response nahi aa rha h auth api me bacjend se ");
        
      console.log("ADD PRODUCT API RESPONSE", response);

  console.log("response.data is",response.data);
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        toast.success("Product Added Successfully");
        // navigate("/login")
      } catch (error) {
        console.error("ADD PRODUCT API ERROR", error);
      toast.error("Failed to add product");

        // navigate("/signup")
      }
      // dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }
export function listProduct(
   
  ) {
    return async (dispatch) => {
      
        console.log("api of list product is ",LIST_PRODUCT_API);
      const toastId = toast.loading("Loading...")
      // dispatch(setLoading(true))
      try {
      




        
        const response = await apiConnector("GET", LIST_PRODUCT_API);
        
      console.log("LIST PRODUCT API RESPONSE", response);

  console.log("response.data is",response.data);
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        // toast.success("Product displayed Successfully");
        toast.dismiss(toastId)
        return response;
    
      
      } catch (error) {
        console.error("ADD PRODUCT API ERROR", error);
      toast.error("Failed to display product");

      
      }
      // dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }
export function deleteProduct(
   foodid
  ) {
    return async (dispatch) => {
      
      console.log("foodid received in auth api is same or not chesk t ",foodid);
        console.log("api of remove  product is ",DELETE_PRODUCT_API);
      const toastId = toast.loading("Loading...")
      // dispatch(setLoading(true))
      try {
      




        
        const response = await apiConnector("DELETE", `${DELETE_PRODUCT_API}/${foodid}`);
        
      console.log("DELETE PRODUCT API RESPONSE", response);

  console.log("response.data  from delete api is",response.data);
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        toast.success("Product deleted Successfully");
        toast.dismiss(toastId)
      
    
      
      } catch (error) {
        console.error("Delete PRODUCT API ERROR", error);
      toast.error("Failed to delete product");

      
      }
      // dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }

  