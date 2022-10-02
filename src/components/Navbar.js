import React from 'react';
import { BsFillCartPlusFill } from "react-icons/bs";
import '../Styles/Navbar.css';

const Navbar = ({setShow}) => {
  return (
    <nav>
    <div className='nav_box'>
    <span className='my_shop' onClick={() => (setShow(true)) }>Happy Shopping </span>
    <div className='cart' onClick={() => setShow(false)}>
    <span>
    <BsFillCartPlusFill />
    </span>    
    </div>
      
    </div>
    </nav>
  )
}

export default Navbar
