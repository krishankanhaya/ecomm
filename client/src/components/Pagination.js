import React from 'react'

function Pagination() {
  return (
    <div className="pb-4">
      <ul className="flex flex-row justify-around ">
        <li className="border border-black pt-3 p-3 rounded-l-md hover:bg-black hover:text-white ">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M872 572H266.8l144.3-183c4.1-5.2.4-13-6.3-13H340c-9.8 0-19.1 4.5-25.1 12.2l-164 208c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
          </svg>
        </li>
        <li className="border border-black pt-2 px-5 py-3 rounded-md hover:bg-green-100 hover:text-black font-bold ">
          <button>1</button>
        </li>
        <li className="border border-black pt-3 p-3 rounded-r-md hover:bg-black hover:text-white ">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M873.1 596.2l-164-208A32 32 0 0 0 684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z"></path>
          </svg>
        </li>
      </ul>
    </div>
  );
}

export default Pagination