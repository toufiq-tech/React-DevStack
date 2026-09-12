import Logo from '../assets/logo-text.png';


const Navbar = () => {
    return (
      <div className="sticky top-0 bg-white ">
      <nav className="flex justify-between gap-4 container mx-auto py-4 mt-5 mb-20">
        <img src={Logo} className="w-[150px] h-[70px]" />
        <ul className="flex gap-4 items-center">
          <li>
            <a className='text-pink-600 hover:text-pink-700' >Home</a>
          </li>
          <li>
            <a className='text-[14px] text-bold' >Technologies</a>
          </li>
          <li>
            <a className='text-[14px]'>Projects</a>
          </li>
          <li>
            <a className='text-[14px]'>About</a>
          </li>
          <li>
            <a className='text-[14px]'>Contact</a>
          </li>
        </ul>

        <div className="flex gap-4 items-center">
    



          <button className="bg-white  -500 text-gray-700 px-4 py-2 rounded-md">
            Sign in
          </button>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-3xl">
            Signup
          </button>
        </div>
      </nav>
    </div>
    );
};

export default Navbar;