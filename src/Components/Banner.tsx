import Hero from '../assets/banner-stack.png';



const Banner = () => {
    return (
        <div className="flex justify-between gap-4 container mx-auto py-4 m-30">
          <div>
            <h1 className="text-[60px] font-extrabold">Build Your Ideal <br></br> <span className="text-[60px] font-extrabold bg-linear-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">Development Stack</span></h1>
            <p className="text-[18px] mt-10 mb-20">Explore frontend, backend, database, and tooling options,<br></br>compare them side by side, and put together the stack that fits your <br></br> next project.</p>
            <div><button className="bg-linear-to-r from-orange-500 to-red-500 text-white px-5 py-3 rounded-md">
              Explore Technologies
            </button>
            <button className="bg-white text-black px-10 py-3 rounded-md border-2 border-gray-300 ml-4">
              Learn More
            </button></div>     
          </div>
          <div>
            <img src={Hero} alt="Banner" />
          </div>  
        </div>
    );
};

export default Banner;