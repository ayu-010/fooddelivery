import React, { useEffect, useState } from 'react'
import './List.css'
import { toast } from 'react-toastify'
import { useDispatch,useSelector } from 'react-redux'
import { listProduct } from '../../services/operations/authapi'
import { deleteProduct } from '../../services/operations/authapi'

const List = () => {
  
  const[list,setList]=useState([]);
  
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.product.productData);

  console.log("product data we aare getting from redux is ",productData);


  const fetchList=async() => {

    try {
      const response =  await dispatch(listProduct());
      console.log("response from auth api is ",response);
     
      if (response ) {
        setList(response.data.data);
        
      } else {
        toast.error("Failed to fetch product list");
      }
    } catch (error) {
      console.error("Error fetching product list:", error);
      toast.error("Failed to fetch product list");
    }
  }


  const removefood=async(foodId)=>{
    console.log("foodid before sending to the auth api is",foodId);
   await dispatch(deleteProduct(foodId));
    fetchList();

// console.log(response);
//   if(response.data.sucess)
//     {
//       toast.success(response.data.message)
//     }
//     else{
//       toast.error("Error")
//     }


  }
  useEffect(()=>{
fetchList();
  },[])
  return (
    <div className='list add felx-col'>
      <p>all foode list</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
        
        <b>Name</b>
        <b>Category</b>
        <b>price</b>
        <b>action</b>
        </div>
        {list.map((item,index)=>
      {
return(
  <div key={index} className='list-table-format'>
<img src={item.image} alt="" />
<p>{item.name}</p>
<p>{item.category}</p>
<p>${item.price}</p>
<p onClick={()=>removefood(item._id)} className='cursor'>X</p>
    </div>
)
      })}
      </div>
    </div>
  )
}

export default List