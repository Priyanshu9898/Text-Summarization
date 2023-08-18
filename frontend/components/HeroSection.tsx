import React, { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <div className="p-4 md:p-0 opacity-0 animate-fadeIn">
        <h1 className="typewriter-effect text-3xl font-bold md:text-3xl lg:text-5xl text-center transform translate-y-4 animate-slideUp mb-2">Text Summarization by TextSpark</h1>
        <p className="text-xl md:text-2xl text-center text-gray-500 dark:text-gray-400 mt-6 flex-wrap transform -translate-y-4 animate-slideDown">Instantly transform dense text into clear summaries, saving you time while ensuring you grasp the core concepts.</p>
    </div>
  );
}

export default HeroSection;

