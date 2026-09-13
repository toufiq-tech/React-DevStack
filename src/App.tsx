import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Technologies from './Components/Technologies';
import { Suspense, useState } from 'react';
import type { Techtype } from './Techtype';

const techFetch = async () : Promise<Techtype[]> => {
  const response = await fetch('/Technologies.json');
  const data = await response.json();
  return data;
}

const App = () => {
  const techPromise = techFetch();
  const [techno, setTechno] = useState<Techtype[]>([]);
  return (
    <div>
      <Navbar />
      <Banner />
      <Suspense>
        <Technologies techPromise={techPromise}
        techno={techno}
        setTechno={setTechno} />
      </Suspense>
    </div>
  );
};

export default App;