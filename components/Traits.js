import React from 'react';
import { useState } from 'react';
const Traits = () => {
    const [clickedTraits, setClickedTraits] = useState([]);

    const handleClick = (trait) => {
      if (clickedTraits.includes(trait)) {
        setClickedTraits(clickedTraits.filter((clickedTrait) => clickedTrait !== trait));
      } else {
        setClickedTraits([...clickedTraits, trait]);
      }
    };
  return (
    <div className=" md:h-full md:w-3/4 md:mx-auto md:mt-6">
      <div className="mt-4 flex flex-wrap">
      <span
          className={`bg-gray-300 border rounded-2xl px-3 py-2 mx-1 mb-2 cursor-pointer ${
            clickedTraits.includes('Adventurous') ? 'bg-green-500' : ''
          }`}
          onClick={() => handleClick('Adventurous')}
        >
          <span className={clickedTraits.includes('Adventurous') ? 'text-black' : ''}>Adventurous</span>
        </span>
        <span
          className={`bg-gray-300 border rounded-2xl px-3 py-2 mx-1 mb-2 cursor-pointer ${
            clickedTraits.includes('Clean') ? 'bg-green-500' : ''
          }`}
          onClick={() => handleClick('Clean')}
        >
          <span className={clickedTraits.includes('Clean') ? 'text-black' : ''}>Clean</span>
        </span>
        <span
          className={`bg-gray-300 border rounded-2xl px-3 py-2 mx-1 mb-2 cursor-pointer ${
            clickedTraits.includes('GoodListener') ? 'bg-green-500' : ''
          }`}
          onClick={() => handleClick('GoodListener')}
        >
          <span className={clickedTraits.includes('GoodListener') ? 'text-black' : ''}>Good Listener</span>
        </span>
        <span
          className={`bg-gray-300 border rounded-2xl px-3 py-2 mx-1 mb-2 cursor-pointer ${
            clickedTraits.includes('Honest') ? 'bg-green-500' : ''
          }`}
          onClick={() => handleClick('Honest')}
        >
          <span className={clickedTraits.includes('Honest') ? 'text-black' : ''}>Honest</span>
        </span>
        <span
          className={`bg-gray-300 border rounded-2xl px-3 py-2 mx-1 mb-2 cursor-pointer ${
            clickedTraits.includes('Inspiring') ? 'bg-green-500' : ''
          }`}
          onClick={() => handleClick('Inspiring')}
        >
          <span className={clickedTraits.includes('Inspiring') ? 'text-black' : ''}>Inspiring</span>
        </span>
        <span
          className={`bg-gray-300 border rounded-2xl px-3 py-2 mx-1 mb-2 cursor-pointer ${
            clickedTraits.includes('kind') ? 'bg-green-500' : ''
          }`}
          onClick={() => handleClick('kind')}
        >
          <span className={clickedTraits.includes('kind') ? 'text-black' : ''}>kind</span>
        </span>
        <span
          className={`bg-gray-300 border rounded-2xl px-3 py-2 mx-1 mb-2 cursor-pointer ${
            clickedTraits.includes('Knowledgable') ? 'bg-green-500' : ''
          }`}
          onClick={() => handleClick('Knowledgable')}
        >
          <span className={clickedTraits.includes('Knowledgable') ? 'text-black' : ''}>Knowledgable</span>
        </span>
        <span
          className={`bg-gray-300 border rounded-2xl px-3 py-2 mx-1 mb-2 cursor-pointer ${
            clickedTraits.includes('Non-judgemental') ? 'bg-green-500' : ''
          }`}
          onClick={() => handleClick('Non-judgemental')}
        >
          <span className={clickedTraits.includes('Non-judgemental') ? 'text-black' : ''}>Non-judgemental</span>
        </span>
        
      </div>
    </div>
  );
};

export default Traits;
