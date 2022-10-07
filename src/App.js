import React , {useState} from 'react';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Cart from './components/Cart';


const App = () => {
  const [show , setShow] = useState(true);
  const [cart, setCart] = useState([]);

const handleClick = (item)=> {
  if (cart.indexOf(item) !== -1) return;
  setCart([...cart, item]);

};
const handleChange = (item , d) => {
  const ind = cart.indexOf(item);
  const arr = cart;
  arr[ind].amount += d;

  if(arr[ind].amount === 0) arr[ind].amount = 1;
  setCart([...arr]);
};


  return (
    <div>
    <Navbar setShow={setShow} size={cart.length}/>

    {
      show 
      ? ( <Info handleClick={handleClick}  /> )
      : ( <Cart cart={cart} setCart={setCart} handleChange={handleChange} /> ) 
    }
    

      <Info  />
      </div>
      );     
};

export default App


  //"homepage": "http://vikas703.github.io/Fetch",

  