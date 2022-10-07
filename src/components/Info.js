import React from 'react';
import { useState , useEffect } from 'react';
import '../Styles/Fetch.css';


const Info  = ({ handleClick }) => {
    const[data,setData] = useState([]);


    
  useEffect(() =>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(json => setData(json))
  },[]);
 
 



  return (
    
    <div className='Details'>
    
    
      {data.map(item => 
        <div className='Section'>
      <h4 key={item.id}><br></br><br></br>  
      Model :  {item.title}  <br></br> <br></br>
      Category:  {item.category}  <br></br> 
      <img className='Box' src={item.image} alt='img'/> 
      <br></br> Price:  {item.price} <br></br><br></br> 
      Description:  {item.description}  <br></br> <br></br> 
      Rating:{item.rating.rate}
      <br></br> <br></br>
      <button className='Btn' onClick={() => handleClick(item)} >Add to Cart</button>

      </h4>
      </div>
      ) } 
     
      </div>
  )
}

export default Info

