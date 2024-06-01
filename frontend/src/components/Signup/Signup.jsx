import React from 'react';
import { useForm } from 'react-hook-form';
import { setSignupData } from '../slices/authSlice';
import { sendOtp } from '../services/operation/formapi';

import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';



const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch=useDispatch();
const {dark}=useSelector((state) => state.darkMode)
  const onSubmit = async (data) => {
    try {
      
      console.log("data that we are gewtting after  submiting signup form  is and passing this data to a usersignup function inform api is ",data);
      
     console.log("dispatching data to setsignupdata");
      dispatch(setSignupData(data));
      dispatch(sendOtp(data.email,navigate));

    } catch (error) {
      console.error('Error registering user:', error.message);
      
    }
  };

  return (
    <div className='  py-32  bg-gradient-to-r from-slate-300 to-slate-500 w-full h-full '>
     <form className={`max-w-sm mx-auto ${dark ? 'font-semibold' : ''}`} onSubmit={handleSubmit(onSubmit)}>


      {/* first name */}
      <div className="mb-5">
          <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
          <input type="text" {...register("firstname", { required: true })} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" />
          {errors.firstname && <span>This field is required</span>}
        </div>

        {/* last name */}
        <div className="mb-5">
          <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
          <input type="text" {...register("lastname", { required: true })} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" />
          {errors.lastname && <span>This field is required</span>}
        </div>
        {/* email  */}

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email" {...register("email", { required: true })} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" />
          {errors.email && <span>This field is required</span>}
        </div>


{/* password */}
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input type="password" {...register("password", { required: true })} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
          {errors.password && <span>This field is required</span>}
        </div>


{/* confirm password */}
        <div className="mb-5">
  <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
  <input 
    type="password" 
    {...register("confirmPassword", { required: true })} 
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
  />
  {errors.confirmPassword && <span>This field is required</span>}
</div>


        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input id="terms" type="checkbox" {...register("terms")} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
          </div>
          <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <Link to="/termsAndCondition" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</Link></label>
        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
      </form>
    </div>
  );
}

export default Signup;
