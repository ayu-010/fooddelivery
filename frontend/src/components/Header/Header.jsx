import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className='header-contents'>
          
        
            {/* <h2>Order your fav food here</h2> */}
            <TypeAnimation
  preRenderFirstString={true}
  sequence={[
    500,
    'Order your fav food here! ', // Concatenate all strings into one line
    1000, // Adjust timing to fit the concatenated string
    'Best Quality!',
    1500,
    'Discount 50% off!'
  ]}
  speed={50}
  style={{ fontSize: '4em', color: 'white', whiteSpace: 'nowrap' }} // Set font size bigger and color to white
  repeat={Infinity}
/>

            <p>dvfbnfmbkdfbkdfjbndfkjbndfbkjdf</p>
            <button>
                View Menu
            </button>
        </div>
    </div>
  )
}

export default Header