import React, { Component } from 'react';


export default function Ghostheader() {
  const divStyle = {
    backgroundImage: 'url(/cover.jpg)',
    height: '60vh',
    maxHeight: '460px',
  };
  return (
    <div className="w-full m-0 p-0 bg-cover bg-bottom" style={divStyle}>

      <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
        <p className="text-white font-extrabold text-3xl md:text-5xl">
          👻 Brian Ketelsen
			</p>
        <p className="text-xl md:text-2xl text-gray-500">Explorer, Pioneer, Early Adopter</p>
      </div>
    </div >
  );
}
