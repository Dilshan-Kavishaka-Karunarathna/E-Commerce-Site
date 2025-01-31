import Hero from './Hero';
import Navigation from './navigation'; 
import './App.css'




function App() {
  const name= "Dilshan"
  const cartCount = 4;
  return(

    <div>
      <Navigation name={name} cartCount={cartCount}/>
      <Hero/>
   

      
    </div>

   
  );
}

export default App
