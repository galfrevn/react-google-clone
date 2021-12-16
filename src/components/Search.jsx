import React, {useEffect, useState} from 'react'
import { useDebounce } from 'use-debounce'

import { useResultContext } from '../contexts/ResultContextProvider' 
import { Links } from './Links'

export const Search = () => {

    const [text, setText] = useState('Valentin Galfre')
    const { setSearchTerm } = useResultContext();
    const [devouncedValue] = useDebounce(text, 300);

    useEffect(() => {
        if (devouncedValue) setSearchTerm(devouncedValue)
    }, [devouncedValue])

    return (
        <div className='relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3'>
            <input
                value={text}
                type="text"
                className='sm:w-96 w-full h-10 dark:bg-white rounded outline-none p-6 text-black'
                placeholder='Search something or type URL'
                onChange={(e) => setText(e.target.value)}
            />
            {text && (
                <button 
                    type='button'
                    className='absolute top-3.5 right-5 text-sm text-bold text-gray-400'
                    onClick={() => setText("")}
                >
                    X
                </button>
            )}
            <Links />
        </div>
    )
}
