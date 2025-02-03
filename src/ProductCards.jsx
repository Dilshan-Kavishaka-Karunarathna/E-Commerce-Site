import ProductCard from './ProductCard';
function ProductCards(props){
    return(
        <div className="grid grid-cols-4 gap-5">
            {props.products.map((product) => (
                <ProductCard 
                key={product._id} 
                image={product.image} 
                product={product.name}
                price={product.price} 
                discription={product.description}/>
            ))}
    
             </div>
    );

}
    
export default ProductCards;