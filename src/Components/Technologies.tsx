import type { Techtype } from "../Techtype";
import { use } from "react";

interface ITechProps {
    techPromise: Promise<Techtype[]>;
}

const Technologies = ({techPromise}: ITechProps) => {
    const data = use(techPromise);
    
   const badgeStyles = {
    Popular: "bg-blue-100 text-blue-600",
    Versatile: "bg-green-100 text-green-600",
    Fast: "bg-red-100 text-red-600",
    "Full-Stack": "bg-black-500 text-black-600",
    Standard: "bg-green-100 text-green-600",
    "Top SQL": "bg-blue-100 text-blue-600",
    Cache: "bg-pink-100 text-pink-600",
    Ubiquitous: "bg-yellow-100 text-yellow-600",
    Essential: "bg-blue-100 text-blue-600"
  };

    return ( 
        <div className="container mx-auto px-4 py-8">
            <div>
                <div>
            <h1 className="text-black text-[40px] font-extrabold">Explore The <span className="text-[60px] font-extrabold bg-linear-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">Technologies</span></h1>
            <p className="text-gray-600 text-[16px]">Pick one technology per category to build your ideal stack.</p> 
            </div>
            <div className="grid grid-cols-3 gap-4 ">
               {data.map((tech) => (
                <div key={tech.id} className="border border-gray-300 p-4 rounded-lg">
                    <div className="flex justify-between"><img className="w-10 h-10" src={tech.icon} alt={tech.name} />
                    <p className={`text-[11px] rounded-2xl px-4 py-3 text-center ${badgeStyles[tech.badge as keyof typeof badgeStyles]}`}>{tech.badge}</p></div>
                    <h2 className="text-[18px] font-bold">{tech.name}</h2>
                    <p className="text-[12px]">{tech.description}</p>
                    <div className="flex flex-row gap-4 justify-between mt-2 mb-4">
                    <p className="text-[11px] bg-gray-100 px-2 rounded-sm"> {tech.category}</p>
                    <p className="text-[11px]"> {tech.difficulty}</p>
                    <p className="text-[11px]">⭐️{tech.rating}</p>
                    </div>
                    <button className="text-white bg-black rounded-lg px-4 py-2 w-full">Add to Stack</button>
                </div>
            ))}
            </div>
            <div>
                
            </div>
            </div>
        </div>

    );
};

export default Technologies;