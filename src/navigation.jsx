import { ShoppingCart } from 'lucide-react'


function Navigation(props){

    return(
       


        <nav className="flex items-center justify-between p-8 mx-16">
            <div className="flex gap-x-16">
                <a className="text-black text-3xl">Mendis</a>
            
            <div className='flex items-center gap-8 text-black-400 text-xl'>
                <a href="/" className="flex items-center gap-8 text-black-200">Home</a>
                <a href="/" className="flex items-center gap-8 text-black-200">Shop</a>
            </div>
            </div>
            
            <div className="flex items-center gap-8 text-black">
                <a href="/cart" className="flex items-center gap-4 text-xl relative">
                    <p className='cartCount'>{props.cartCount||0}</p>
                    <div className='flex items-center gap-2 text-xl'>
                        <ShoppingCart/>
                        Cart
                    </div>
                    </a>

                {props.name?
                  (<p className="text-xl">HI {props.name}</p>)
                  : (
                  <div className="flex gap-4">
                  <a href="/sign" className="text-xl">Sign</a>
                  <a href="/signup" className="text-xl">Sign up</a>
                  </div>)}
            </div>
            
            

        </nav>




    )
}

export default Navigation