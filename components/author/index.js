import React, { Component } from 'react';


export default function Author() {
  return (
    <div className="flex w-full items-center font-sans p-8 md:p-24">
      <img className="w-10 h-10 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
      <div className="flex-1">
        <p className="text-base font-bold text-base md:text-xl leading-none">Ghostwind CSS</p>
        <p className="text-gray-600 text-xs md:text-base">Tailwind CSS version of Ghost's Casper theme by <a
          className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
          href="https://www.tailwindtoolbox.com">TailwindToolbox.com</a></p>
      </div>
      <div className="justify-end">
        <button
          className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">Read
						More</button>
      </div>
    </div>
  );
}
