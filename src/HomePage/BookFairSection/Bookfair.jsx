

const Bookfair = () => {
    return (
        <div className='mt-24 lg:mt-40 '>
            <h1 className='text-center mb-12 md:mb-20 text-3xl'>Books Books Books !!!</h1>
            <div className='w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10'>

                {/* <div className="flex items-center justify-center"> */}
                    <div className='flex flex-col justify-center space-y-6'>
                        <h1 className='text-3xl'>
                            Join the <br />
                            <span className='text-emerald-500'>Biggest book fair</span>
                            <br /> in your area!</h1>
                        <p className='text-justify'>
                            Hello book lovers! We are glad to offer you a special week this summer. Collect the best and rare collection of books at your hand and meet your favourite writers face to face.
                        </p>
                        <h2 className='text-3xl text-warning'>You miss, You Regret</h2>
                    </div>
                    <div className=' ml-auto h-80 w-60 '>
                        <img className='object-cover h-full float-right ' src="hand.jpg" alt="" />
                    </div>
                {/* </div> */}


                {/* <div  className="flex items-center justify-center gap-10"> */}
                    <div className='h-80 '>
                        <img className='object-contain h-full' src="https://plus.unsplash.com/premium_photo-1663047380098-6d2fe784e89c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlicmFyaWFufGVufDB8fDB8fHww" alt="" />
                    </div>
                    <div className=' flex flex-col justify-center space-y-6'>
                        <h1 className='text-3xl '>
                            <span className='text-emerald-500'>We work 24/7 </span><br />
                            <span className=''>Just for our  <br /> future generation</span>
                        </h1>
                        <p className=' text-justify'>
                            Join us on a literary journey and let the pages of our books ignite your imagination. Whether you are a seasoned bibliophile or a curious newcomer, there is a story waiting for you at our Book Library. Come in, explore, and let the magic of reading unfold.
                        </p>
                        <h3 className='text-3xl text-warning'>Books make us <br /> feel humanity</h3>
                    </div>
                {/* </div> */}
            </div>
        </div>
    );
};

export default Bookfair;