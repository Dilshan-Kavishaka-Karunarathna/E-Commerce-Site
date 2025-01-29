import './navigation.css'

function Navigation(){
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
                    <p className='cartCount'>0</p>
                    <div className='cartIcon'>
                        Cart
                    </div>
                    </a>

           
                <p className="name">HI Dilshan</p>
            </div>
            

        </nav>




    )
}

export default Navigation