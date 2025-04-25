import { useState } from "react";
import Products from "./products";


function Price(){
    const [sortPrice,setSortPrice] = useState("asc");

    const sortedProducts = [products].sort((a,b) => (
        sortPrice === "asc" ? a.price -b.price : b.price - a.price 
    ));

    

return (
    <div>
        <button onClick={() => setSortPrice("asc")}>Sort Price Asc</button>
        <button onClick={() => setSortPrice("desc")}>Sort Price Desc</button>
        <Products products={sortedProducts}/>


        <ul>
        {sortedProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      
    </div>

);

}
export default Price;