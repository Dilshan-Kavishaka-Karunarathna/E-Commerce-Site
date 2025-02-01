function Hero(){

    

    return(
        <section className="p-8 mx-16 ">
            <div className="grid grid-cols-2 min-h-[60vh] bg-[#f8f9fb]">
                <div className="flex flex-col p-16 justify-center gap-8">
                    <span className="bg-yellow-500 text-black px-1 rounded w-40 pl-2.5">WEEKLY DISCOUNT</span>
                    <h1 className="text-6xl py-8 font-bold-700">Premium Product 
                        Online Shop 
                    </h1>
                    <p className="phr"> The defendant expert's reliance o
                        n the theoretical injury risk derived 
                        from experimental cadaver testing data
                         and two dummy crash tests lacks gen
                         eralizability to real world, </p>
                    <button className="text-white bg-black w-40 rounded-md text-xl font-bold-400 p-2 w-fit">SHOP NOW</button>
                </div>
                <div className='relative'>
                    <img src='https://fee-storefront.vercel.app/assets/hero/hero.jpg'
                    alt=''
                    className='h-full w-full object-cover'/>
                </div>
            </div> 
        </section>
    );

}

export default Hero;