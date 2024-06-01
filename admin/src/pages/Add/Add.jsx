import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Add.css'

import { useDispatch } from 'react-redux'

import { setProductData } from '../../slices/productSlice'
import { addProduct } from '../../services/operations/authapi'

const Add = () => {
  
  const dispatch = useDispatch()
  const [image,setimage]=useState(null);

  const[data,setData]=useState({
    name:"",
    description:"",
    category:"Salad",
    price:"",
    
  })

  const onChangeHandler=(e)=>
  {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
    

  }

  const onImageChangeHandler = (e) => {
    if (e.target.files ) {
      const selectedImage = e.target.files[0];
      setimage(selectedImage);
    }
  };





  const onSubmitHandler=(event)=>
  {
event.preventDefault();
const productData={
  ...data,
  Foodimage:image
}

dispatch(setProductData(productData));
console.log("product data before sedning is ",productData);
dispatch(addProduct(

          productData.name,
          productData.description,
          productData.category,
          productData.price,
          productData.Foodimage



));
setData({
  name:"",
  description:"",
  category:"Salad",
  price:"",
})
setimage(null);

  }
  return (
    <div className='add'>
      <form className=' flex-col' onSubmit={onSubmitHandler}>

        <div className="add-img-upload flex-col">
          <p>upload image</p>
          <label htmlFor="image">
          <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
{/* <img src={assets.upload_area} alt="" /> */}
          </label>
          <input
           onChange={onImageChangeHandler} 

            type="file"
             id='image'
             name='Foodimage'
              // hidden
               required />
        </div>


        <div className="add-product-name flex-col">
          <p>product name</p>
          <input 
          onChange={onChangeHandler} value={data.name}
           type="text" 
          name='name' placeholder='type here' />
        </div>

        <div className="add-product-description flex-col">
          <p>product description</p>
          <textarea onChange={onChangeHandler}   
          value={data.description}  name="description"  
          rows="6"
           placeholder='write your description here'></textarea>
        </div>


        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>product category</p>
            <select onChange={onChangeHandler} name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>


          <div className="add-price flex-col">
            <p>Product price</p>
            <input onChange={onChangeHandler} value={data.price} type= 'number' name='price' placeholder='$20'  />
          </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  )
}

export default Add