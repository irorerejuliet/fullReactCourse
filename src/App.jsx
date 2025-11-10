import React, { useState } from 'react'
import Header from './Components/customcard/Header'
import { core_concept } from './Components/Constant/coreData';
import TabButton from './Components/Buttons/TabButton';
import { examples } from './Components/Constant/data';






const App = () => { 
  const  [selectedTopic, setSelectedTopic] = useState('components')


  function handleSelect(SeclectedButton) {
    // selected button should be a string 'component', jsx etc
    setSelectedTopic(SeclectedButton)
    console.log(selectedTopic);
  }
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
                <img
                  src={image}
                  alt="watches"
                  className="py-5 transform hover:scale-110 transition duration-300"
                />
                <h3 className="text-lg font-bold pb-4">{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </ul>
        </section>
        <section className="text-white pt-24">
          <h2 className="text-lg font-semibold text-purple-400">Examples</h2>
          <menu className="flex gap-20 items-center text-lg font-semibol text-purple-200 py-5">
            <TabButton onSelect={() => handleSelect("Components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("JSX")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("State")}>State</TabButton>
          </menu>
          {selectedTopic}

          <div>
            <h3>{examples[selectedTopic].title}</h3>
            <p>{examples[selectedTopic].description}</p>
            <pre>
              <code>{examples[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App
