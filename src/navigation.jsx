import { ShoppingCart } from 'lucide-react'
import './navigation.css'

function Navigation(props){

    return(
       


        <nav className="navigationContiner">
            <div className="navigationGroup">
                <a className="brandName">Mendis</a>
            
            <div className='navLinks'>
                <a href="/" className="home">Home</a>
                <a href="/" className="shop">Shop</a>
            </div>
            </div>
            
            <div className="cartGroup">
                <a href="/cart" className="cart">
                    <p className='cartCount'>{props.cartCount}</p>
                    <div className='cartIcon'>
                        <ShoppingCart/>
                        Cart
                    </div>
                    </a>

           
                <p className="name">HI {props.name}</p>
            </div>
            

        </nav>




    )
}

export default Navigation