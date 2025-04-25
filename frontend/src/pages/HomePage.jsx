import React from 'react'
import Hero from '../Hero';
import Navigation from '../navigation';
import Products from '../products';

const HomePage = () => {
    const name=""
  const cartCount = "";
  return(

    <div>
      <Navigation name={name} cartCount={cartCount}/>
      <Hero/>
      <Products/>
      
      

    </div>

   
  );

}

export default HomePage