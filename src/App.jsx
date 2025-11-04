import React from 'react'
import Header from './Components/customcard/Header'
import CoreConcepts from './Components/customcard/CoreConcepts';
import { core_concept } from './Components/Constant/coreData';
import TabButton from './Components/Buttons/TabButton';






const App = () => { 
  return (
    <div className="bg-[#140524] w-full min-h-screen">
      <Header />
      <main className="max-w-[1440px] m-auto">
        <section className="bg-slate-950 rounded-lg py-10">
          <h2 className="text-white text-2xl font-bold text-center">
            Core Concepts
          </h2>
          {/* what is the best thing to do on the this code, is it to map or just use spread operator */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {core_concept.map(({ id, image, title, description }) => (
              <div key={id} className="text-white w-[200px] text-center">
                <img src={image} alt="watches" className='py-5 transform hover:scale-110 transition duration-300'/>
                <h3 className="text-lg font-bold pb-4">{title}</h3>
                <p>{description}</p>
              </div>
            ))}
            {/* <CoreConcepts
              image={core_concept[0].image}
              title={core_concept[0].title}
              description={core_concept[0].description}
            />
            <CoreConcepts {...core_concept[1]} className="text-center" />
            <CoreConcepts {...core_concept[2]} />
            <CoreConcepts {...core_concept[3]} /> */}
          </ul>
        </section>
        <section className="text-white pt-24">
          <h2 className="text-lg font-semibold text-purple-400">Examples</h2>
          <menu className="flex gap-20 items-center text-lg font-semibol text-purple-200 py-5">
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App
