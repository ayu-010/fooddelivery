import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-options'>
        
            <NavLink  to='/add' className="sidebar-option">
        
                <img src={assets.add_icon}></img>
                <p>Add items</p>
         
            </NavLink>
            <NavLink  to='/list' className="sidebar-option">
        
                <img src={assets.order_icon}></img>
                <p>List items</p>
         
            </NavLink>
            <NavLink  to='orders' className="sidebar-option">
        
                <img src={assets.order_icon}></img>
                <p>orders</p>
         
            </NavLink>

        </div>
    </div>
  )
}

export default SideBar