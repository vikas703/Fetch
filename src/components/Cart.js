import '../Styles/Cart.css';


const Cart = ({ cart , setCart, handleChange}) => {
  
  
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  

  
  return (
    <article>
    {cart.map((item) => (
      <div className='cart_box' key={item.id}>
      <div className='cart_img'>
      <img src={item.image} alt='img' />
      <p>{item.title}</p>
      </div>
      <div>
     
      </div>
      <div>
      <span>{item.price}</span>
      <button onClick={() => handleRemove(item.id)}>Remove</button>
      </div>
      </div>
    ))}
    
    
    </article>
    
  );
};

export default Cart
