import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'heroicons-react';


const Trending = ({ trendingMovies }) => {

  const [current, setCurrent] = useState(0);
  const length = trendingMovies.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(trendingMovies) || trendingMovies.length <= 0) {
    return null;
  }

  return (
    <div className='bg: lg:w-3/4 h-2/5 lg:ml-20 w-full '>
      <div className='mx-auto relative flex'>
        <ChevronLeft className='left-arrow absolute cursor-pointer left-2 md:top-1/2 md:h-20 md:w-20 bg-white rounded-full' onClick={prevSlide} />
        <ChevronRight className='right-arrow absolute cursor-pointer right-2 md:top-1/2 md:h-20 md:w-20 bg-white rounded-full' onClick={nextSlide} />
        {trendingMovies.filter(slide => (slide.backDrop)).map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img src={slide.backDrop} alt='trending series backdrop' className='rounded-3xl'/>
              )}
              {index === current && (
                <div className='flex p-2 lg:-mt-64'>
                  <img src={slide.poster} className='h-60 hidden lg:block' alt='trending series poster' />
                  <div className='bg-gray-300 rounded-2xl ml-2 p-2'>
                    <p className='lg:text-4xl text-lg lg:my-1'>{slide.title}</p>
                    <p className='lg:text-3xl text-md flex my-1'>{slide.rating}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="#bab52b" viewBox="0 0 24 24" stroke="#bab52b">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </p>
                    <p className='text-lg my-1'>{slide.overview}</p>
                  </div>
                </div>
              )}

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Trending;