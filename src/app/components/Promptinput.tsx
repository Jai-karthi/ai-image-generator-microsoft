'use client';

import React, { useState } from 'react'
import useSWR from 'swr';
import fetchsuggestionfromchatgpt from '../lib/fetchsuggestionfromchatgpt';

function Promptinput() {
    const [input,setinput] = useState()
    const { data: suggestion, isLoading,mutate,isValidating } = useSWR('/api/suggestion', fetchsuggestionfromchatgpt,{
      revalidateOnFocus:false,
    })
  return (
    <div className='m-10'>
        <form className=' flex flex-col lg:flex-row lg:divide-x divide-gray-500 border border-gray-500 shadow-gray-300 rounded-md'>
            <textarea 
             value={input}
             onChange={(e) => setinput(e.target.value)}
             placeholder= "Enter a prompt..."
             className="flex-1 outline-none p-1 px-2 bg-dark-col-600 rounded-md rounded-b-none lg:rounded-bl-md lg:rounded-r-none text-gray-400"/>
                <button type='submit' 

                 disabled={!input}
                 className={`p-3 ${
                   input
                     ? "bg-dark-col-800 transition-colors duration-200 hover:bg-dark-col-1000"
                     : "text-gray-400 bg-slate-400-gray cursor-not-allowed"
                 }`}
                >Generator</button>
                <button type="button" className="p-3 bg-dark-col-700 transition-colors duration-200 disabled:text-violet-400 disabled:cursor-not-allowed disabled:bg-violet-500  hover:bg-dark-col-900">use suggestion</button>
                <button type="button" className="p-3 bg-dark-col-500 transition-colors hover:bg-dark-col-800 duration-200 rounded-b-md lg:rounded-r-md lg:rounded-bl-none" >use suggestion</button>
        </form>
    </div>
  )
}

export default Promptinput