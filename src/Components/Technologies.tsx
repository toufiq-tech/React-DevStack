import type { Techtype } from "../Techtype";
import { use } from "react";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ITechProps {
  techPromise: Promise<Techtype[]>;
  techno: Techtype[];
  setTechno: React.Dispatch<React.SetStateAction<Techtype[]>>;
}

const Technologies = ({ techPromise, techno, setTechno }: ITechProps) => {
  const data = use(techPromise);

  const handleAddToStack = (tech: Techtype) => {
    setTechno([...techno, tech]);
    toast.success(`${tech.name} added to your stack!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const badgeStyles = {
    Popular: "bg-blue-100 text-blue-600",
    Versatile: "bg-green-100 text-green-600",
    Fast: "bg-red-100 text-red-600",
    "Full-Stack": "bg-gray-200 text-black-600",
    Standard: "bg-green-100 text-green-600",
    "Top SQL": "bg-blue-100 text-blue-600",
    Cache: "bg-pink-100 text-pink-600",
    Ubiquitous: "bg-yellow-100 text-yellow-600",
    Essential: "bg-blue-100 text-blue-600",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <div>
          <h1 className="text-black text-[36px] font-extrabold">
            Explore The
            <span className="text-[36px] font-extrabold bg-linear-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
              Technologies
            </span>
          </h1>
          <p className="text-gray-600 text-[16px]">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 mt-8">
          <div className="col-span-8 grid grid-cols-3 gap-4 ">
            {data.map((tech) => {
              const alreadyAdded = techno.some((item) => item.id === tech.id);

              return (
                <div
                  key={tech.id}
                  className="border border-gray-300 p-4 rounded-lg"
                >
                  <div className="flex justify-between">
                    <img className="w-10 h-10" src={tech.icon} alt={tech.name} />
                    <p
                      className={`text-[11px] rounded-2xl px-4 py-3 text-center ${
                        badgeStyles[tech.badge as keyof typeof badgeStyles]
                      }`}
                    >
                      {tech.badge}
                    </p>
                  </div>
                  <h2 className="text-[18px] font-bold">{tech.name}</h2>
                  <p className="text-[12px]">{tech.description}</p>
                  <div className="flex flex-row gap-4 justify-between mt-2 mb-4">
                    <p className="text-[11px] bg-gray-100 px-2 rounded-sm">
                      {tech.category}
                    </p>
                    <p className="text-[11px]">{tech.difficulty}</p>
                    <p className="text-[11px]">⭐️{tech.rating}</p>
                  </div>

                  <button
                    onClick={() => !alreadyAdded && handleAddToStack(tech)}
                    disabled={alreadyAdded}
                    className={`rounded-lg px-4 py-2 w-full ${
                      alreadyAdded
                        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    {alreadyAdded ? "Added to Stack" : "Add to Stack"}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="col-span-4 border border-gray-300 p-4 rounded-lg w-full h-fit">
            <h2 className="text-[24px] font-bold mb-2">Your Stack</h2>
            {techno.length > 0 && (
              <p className="text-gray-500 text-[16px] mb-4">
                {techno.length} {techno.length === 1 ? "Technology" : "Technologies"} Selected
              </p>
            )}

            {techno.length === 0 ? (
              <>
                <p className="text-gray-500 text-[16px] mb-4">
                  No technologies selected yet.
                </p>
                <div className="border border-gray-400 rounded-lg p-8 text-center my-3">
                  <p className="text-gray-500 text-sm">Your stack is empty.</p>
                </div>
              </>
            ) : (
              <div className="space-y-3">
                {techno.map((tech) => (
                  <div
                    key={tech.id}
                    className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-6 h-6"
                      />
                      <div>
                        <p className="text-sm font-medium">{tech.name}</p>
                        <p className="text-xs text-gray-500">{tech.category}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setTechno(techno.filter((item) => item.id !== tech.id));
                        toast.info(`${tech.name} removed from your stack!`, {
                          position: "top-center",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: false,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                          transition: Bounce,
                        });
                      }}
                      className="text-red-500 font-bold hover:text-red-700"
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => {
                    setTechno([]);
                    toast.warn("All technologies removed from your stack!", {
                      position: "top-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: false,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      transition: Bounce,
                    });
                  }}
                  className="bg-white text-red-500 py-2 rounded-lg w-full border border-red-500 hover:bg-red-50"
                >
                  Remove All
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
