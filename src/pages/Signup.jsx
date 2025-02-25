import React from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"



const Signup = () => {
  return (
    <div className='bg-gray-50 justify-center items-center min-h-screen'>
        <div className='max-w-md w-full mx-auto p-6'>
            <div className='bg-white rounded-lg shadow-lg space-y-6 p-6'>
                <div className='text-center space-y-2'>
                    <h2 className='text-2xl font-semibold'>
                        Create Your Account
                    </h2>
                    <p>
                        You can create your own account with us!
                    </p>
                    </div>
                    <form>
                        <label htmlFor="Email">Email</label>
                        <Input
                         type="email"
                         placeholder ="Enter Your Email"
                        // value={email}
                         onChange = {(e)=>setEmail(e.target.value)}
                         required

                         />


                    </form>

                       
                

            </div>

        </div>
        

    </div>
  )
}

export default Signup