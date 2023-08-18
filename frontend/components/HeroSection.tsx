import React, {FC} from 'react'

const HeroSection: FC = () => {
  return (
    <div className='p-4 md:p-0'>
        <h1 className='text-3xl font-bold md:text-3xl lg:text-5xl text-center'>Text Summarization by TextSpark</h1>
        <p className='text-xl font-bold md:text-2xl text-center text-gray-500 dark:text-gray-200 mt-6 flex-wrap'>Instantly transform dense text into clear summaries, saving you time while ensuring you grasp the core concepts.</p>
    </div>
  )
}

export default HeroSection