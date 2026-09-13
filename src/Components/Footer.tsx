import Footimg from "../assets/logo-text.png";

const Footer = () => {
    return (
        <div className="container mx-auto px-4 py-8 ">
            <div className="grid grid-cols-4 gap-4 mb-15">
              <div>
                <img src={Footimg} alt="Logo" className="w-24 h-10" />
                <p className="text-[12px] text-gray-500">Curated tools, technologies, and resources for developers building modern software.</p>
                <div className="flex gap-4 mt-4">
                    <p className="text-[14px] text-bold">Github</p>
                    <p className="text-[14px] text-bold">Twitter</p>
                    <p className="text-[14px] text-bold">LinkedIn</p>                    
                </div>
              </div>
              <div>
                <h1 className="text-[14px] font-bold">Product</h1>
                <p className="text-[12px] text-gray-500">Home</p>
                <p className="text-[12px] text-gray-500">Technologies</p>
                <p className="text-[12px] text-gray-500">Projects</p>
              </div>
              <div>
                <h1 className="text-[14px] font-bold">Company</h1>
                <p className="text-[12px] text-gray-500">About</p>
                <p className="text-[12px] text-gray-500">Contact</p>
                <p className="text-[12px] text-gray-500">Careers</p>
              </div>
              <div>
                <h1 className="text-[14px] font-bold">Legal</h1>
                <p className="text-[12px] text-gray-500">Legal</p>
                <p className="text-[12px] text-gray-500">Privacy Policy</p>
                <p className="text-[12px] text-gray-500">Terms of Service</p>
              </div>
            </div>
            <hr className="border-t border-gray-300 my-5" />
            <div className="flex justify-between items-center">
                <div>
                  <p className="text-[12px] text-gray-500">© 2026 DevStack. All rights reserved.</p>
                </div>
                <div className="flex gap-4">
                 <p className="text-[12px] text-gray-500">Privacy</p>
                 <p className="text-[12px] text-gray-500">Terms</p>
                 </div>
            </div>
         </div>
    );
};

export default Footer;