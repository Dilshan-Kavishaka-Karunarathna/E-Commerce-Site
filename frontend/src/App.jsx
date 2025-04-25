import Hero from './Hero';
import Navigation from './navigation'; 
import Products from './products';
import Price from './PriceOrder';



function App() {
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

export default App;
