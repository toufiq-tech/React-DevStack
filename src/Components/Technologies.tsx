import type { Techtype } from "../Techtype";
import { use } from "react";

interface ITechProps {
    techPromise: Promise<Techtype[]>;
}

const Technologies = ({techPromise}: ITechProps) => {
    const data = use(techPromise);
    console.log(data, "data");
    return (
        <div>
            <div>
            <h1 className="text-black text-[40px] font-extrabold">Explore The <span className="text-[60px] font-extrabold bg-linear-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">Technologies</span></h1>
            <p className="text-gray-600 text-[16px]">Pick one technology per category to build your ideal stack.</p> 
        </div>
        <div>
            {data.map((tech) => (
                <div key={tech.id}>
                    <img src={tech.icon} alt={tech.name} />
                    <h2>{tech.name}</h2>
                    <p>{tech.description}</p>
                    <div className="flex flex-row gap-4">
                    <p> {tech.category}</p>
                    <p> {tech.difficulty}</p>
                    <p>{tech.rating}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>

    );
};

export default Technologies;