import Hero from './Hero';
import Navigation from './navigation'; 
import './App.css'
import Products from './products';









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
