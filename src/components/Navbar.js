import React from 'react';
import { BsFillCartPlusFill } from "react-icons/bs";
import '../Styles/Navbar.css';

const Navbar = ({setShow}) => {
  return (
    <div className='Main'>
    <div className='Nav'>
    <span className='my_shop' onClick={() => (setShow(true)) }>Happy Shopping </span>
    <div className='cart' onClick={() => setShow(false)}>
    <span>
    <BsFillCartPlusFill />
    </span>    
    </div>
      
    </div>
    </div>
  )
}

export default Navbar
