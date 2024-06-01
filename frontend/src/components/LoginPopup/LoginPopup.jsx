import React, { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import './LoginPopup.css'
import { StoreContext } from "../../context/StoreContext";
import axios from "axios"
import {toast} from "react-hot-toast"


const LoginPopup = ({ setShowLogin }) => {
  const{url,settoken}=useContext(StoreContext);
  const [currState, setCurrState] = useState("SignUp");
  const[data,setData]=useState({
    name:"",
    email:"",
    password:""
  })


  const onChangeHandler=(e)=>
    {
      setData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }))

    }

    const onLogin=async(event)=>
      {
console.log("data is ",data);
event.preventDefault();
let newUrl=url;
console.log(newUrl);
console.log(url);


if(currState==='Login')
  {  
    // console.log(newUrl);
    newUrl=newUrl+ `/api/v1/login` ;
  }
  else{
    
    newUrl=newUrl+ `/api/v1/signup` ;
    

  }

  const response=await  axios.post(newUrl,data);
  console.log("response insidev the login popup after sign up is ",response);
  if(response.data.success)
    {
  toast.success(response.data.message);
settoken(response.data.token)
console.log("response inside the login pop up if any one gets looggged in is ",response.data.token);
localStorage.setItem("token",response.data.token);
setShowLogin(false);
    }

    else{
      alert(response.data.message);
    }

      }
  
   
    
  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => {
              setShowLogin(false);
            }}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input onChange={onChangeHandler} type="text" 
            name="name"
            value={data.name}
            placeholder="your name" required />
          )}
          <input onChange={onChangeHandler}  type="email" name="email" value={data.email} placeholder="your email" required />


          <input onChange={onChangeHandler}   type="password"  value={data.password} name="password" placeholder="your password" required />
        </div>
        <button type="submit">{currState === "SignUp" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing i agreee with terms and condition</p>
        </div>
        {
          currState==="Login"? <p>
          creatr a new account? <span onClick={()=>setCurrState("SignUp")}>Click here</span>
        </p>: <p>
          already have acocunt <span onClick={()=>setCurrState("Login")}>Login here</span>
        </p>
        }
       
       
      </form>
    </div>
  );
};

export default LoginPopup;
