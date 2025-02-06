import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { useState } from "react"
 
  

function ProductCard(props){
  const [num, setNum] = useState(0);

  const handleClick = (e) => {
    setNum(num + 1);
  };

    return (
      
      <Card>
        <div className="h-80 bg-card rounded-lg p-4 relative">
        <img src={props.image} className="h-full w-full object-cover rounded-lg" alt="product" />

        </div>
        <div className="flex justify-between items-center px-4 ">
          <h3 className="font-bold text-lg">{props.product}</h3>
          <h3 className="font-bold text-base">{props.price}</h3>
          <p>{num}</p>
        </div>
        <CardContent className="flex justify-between items-center px-4">
          <CardDescription>{props.discription}.</CardDescription>
        </CardContent>
        <div className="flex justify-center px-4 ">
        <button className="text-white bg-black w-full p-1 text-base font-bold rounded-md" onClick={handleClick}>Add To Cart</button>
        </div>
      </Card>
    )
}
export default ProductCard;