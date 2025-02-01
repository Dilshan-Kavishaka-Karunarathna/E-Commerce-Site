import Hero from './Hero';
import Navigation from './navigation'; 
import './App.css'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"








function App() {
  const name=""
  const cartCount = "";
  return(

    <div>
      <Navigation name={name} cartCount={cartCount}/>
      <Hero/>
      <div className='px-52 w-56 justify-items-center'>
        <Card className="w-96 justify-items-center"  >
          <CardHeader>
           <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
           <p>Card Content</p>
          </CardContent>
          <CardFooter>
           <Button className="w-fit">Buy Now</Button>
         </CardFooter>
        </Card>



      </div>
      

   

      
    </div>

   
  );
}

export default App
