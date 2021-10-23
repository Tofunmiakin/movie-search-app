import React, { Fragment, useState } from 'react';
import MovieCard from '../Components/movieCard';
import { Listbox, Transition } from '@headlessui/react';

const filters = [
  { name: 'Movies' },
  { name: 'TV Shows' },
  { name: 'Celebs' },
]

const SearchMovie = () => {

  const [query, setQuery] = useState('');

  const [movies, setMovies] = useState([]);

  const [selected, setSelected] = useState(filters[0]);

  const searchMovie = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/multi?api_key=dff4a91d49ad334e41a5e1c2973fa9d8&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='text-center'>
      <form className='my-20 py-10 flex flex-row justify-center' onSubmit={searchMovie}>
        <Listbox value={selected} onChange={setSelected} className='mr-10w-36 my-auto '>
          <div>
            <Listbox.Button className="flex p-6 text-left bg-white rounded-2xl shadow-lg cursor-pointer md:text-xl">
              <span className="block truncate">{selected.name}</span>
              <span className=" inset-y-0 right-0 flex items-center pl-2 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </span>
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute w-96 py-1 mt-1 md:text-xl bg-white rounded-md shadow-lg max-h-60">
                {filters.map((filter, filterIndex) => (
                  <Listbox.Option
                    key={filterIndex}
                    className={({ active }) =>
                      `${active ? 'text-amber-900 bg-gray-400' : 'text-gray-900'}
                          cursor-pointer select-none relative py-2`
                    }
                    value={filter}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`${selected ? 'font-medium' : 'font-normal'
                            } block truncate`}
                        >
                          {filter.name}
                        </span>
                        {selected ? (
                          <span
                            className={`${active ? 'text-amber-600' : 'text-amber-600'
                              }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                          >
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>

        <input
          className=' border-transparent border-2 rounded-2xl p-6 max-h-20 w-2/5 md:text-xl focus:ring-2 focus:outline-none focus:ring-indigo-500 shadow-lg'
          type='text'
          name='query'
          placeholder='Search for a movie'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button className='-ml-20 p-6 max-h-20'
          type='submit'
        >
          <svg xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

      </form>
      <div className="lg:w-4/6 flex flex-col justify-end">
        {movies.filter(movie => movie.poster_path).map(movie => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default SearchMovie;