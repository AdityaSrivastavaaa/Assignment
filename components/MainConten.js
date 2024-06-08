import React, { useState } from 'react';
import Star from './Star';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'; // Import thumbs-up and thumbs-down icons
import like from '../public/like.png';
import dislike from '../public/dislike.png';
import Traits from './Traits';

const MainContent = () => {
  const [likeClicked, setLikeClicked] = useState(false);
  const [dislikeClicked, setDislikeClicked] = useState(false);

  const handleLike = () => {
    setLikeClicked(true);
    setDislikeClicked(false);
  };

  const handleDislike = () => {
    setDislikeClicked(true);
    setLikeClicked(false);
  };

  return (
    <div className="p-4 md:border border-2 border-purple-200 md:h-full md:w-3/4 md:mx-auto md:mt-6">
      <h1 className="text-3xl font-bold">Leave a review</h1>
      <div className="mt-5">
        <h1 className="font-bold text-xl">Safety</h1>
        <p>How Safe did you feel with Trausti?</p>
        <Star />
      </div>
      <div className="mt-5">
        <h1 className="font-bold text-xl">Communication</h1>
        <p>how Easy was to communicate with Trausti</p>
        <Star />
      </div>
      <div className="mt-5">
        <h1 className="font-bold text-xl">Would you recommend Trausti?</h1>
        <p>Your opinion wont be posted publicly.</p>
        <div className="flex gap-4">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleDislike}
          >
            <FaThumbsDown
              className="w-10 h-10"
              color={dislikeClicked ? 'red' : 'black'}
            />
            <p>No</p>
          </div>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleLike}
          >
            <FaThumbsUp
              className="w-10 h-10"
              color={likeClicked ? 'green' : 'black'}
            />
            <p>Yes</p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="font-bold text-xl">Praise</h1>
        <p>What traits best describe Trausti?</p>
        <Traits/>
      </div>
      <div className="mt-5">
        <h1 className="font-bold text-xl">Care to share more?</h1>
        <p>How was your overall experience? What's that one thing you won't forget Trausti For?</p>
        <textarea
          className="w-full border border-2-solid border-slate-400 p-2"
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Come on , you know the drill."
        />
      </div>
      <div className="mt-5">
        <button type="submit" className="bg-green-400 w-full py-3 border rounded-lg">
          PUBLISH REVIEW
        </button>
      </div>
    </div>
  );
};

export default MainContent;
