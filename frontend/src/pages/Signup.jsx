import React from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router';
import { useState } from 'react';



const Signup = () => {
    const[Email,setEmail] = useState("");
    const[password,setPassword]= useState("");

    const handleSignup = (e)=>{
        e.preventDefault();
        console.log("sign up with",Email,password);
    }
  return (
    <div className='bg-gray-50 justify-center items-center min-h-screen'>
        <div className='max-w-md w-full mx-auto p-6'>
            <div className='bg-white rounded-lg shadow-lg p-8 space-y-6'>
                <div className='text-center space-y-2'>
                    <h2 className='text-2xl font-semibold tracking-tight'>
                        Create Your Account
                    </h2>
                    <p className='text-muted-foreground'>
                        You can create your own account with us!
                    </p>
                    </div>
                    <form className='space-y-6' onSubmit={handleSignup}>
                        <div className='space-y-2'>
                        <label htmlFor="Email">Email</label>
                        <Input
                         type="email"
                         placeholder ="Enter Your Email"
                         value={Email}
                         onChange = {(e)=>setEmail(e.target.value)}
                         required
                        />
                        </div>
                        <div className='space-y-2'>
                            <lable htmlFor="Password">Password</lable>
                            <Input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            required
                            />
                        </div>
                        <div>
                            <Button className='w-full' type='submit'>
                                Sign Up
                            </Button>
                      

                        </div>
                        </form>
                        <div className='relative'>
                            <div className='absolute inset-0 flex items-center'>
                                <span className='w-full border-t'/>
                            </div>
                            <div className='relative flex justify-center text-xs uppercase'>
                                <span className='bg-white px-2 text-muted-foreground'>
                                OR CONTINUE WITH 
                                </span>                       
                            </div>
                        </div>
                        <Button
                        variant="outline"
                        className='w-full'
                        >
                            <FcGoogle />
                            Continue With Google
                        </Button>
                        <div className='text-center text-sm'>
                            All Ready Have an Account? {" "}
                            <Link
                                href="/Sign In"
                                className="font-medium text-primary hover:underline"
                            >
                                    Sign in
                                    </Link>
                        </div>

                        <div className='text-muted-foreground text-center text-sm'>
                        Secured by Clerk
                        </div>

            </div>

        </div>
        

    </div>
  )
}

export default Signup