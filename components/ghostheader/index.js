import React, { Component } from 'react';
import styles from './index.module.css'


export default function Ghostheader() {
  return (
    <div className={styles.heading}>

      <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
        <p className="text-white font-extrabold text-3xl md:text-5xl">
          👻 Brian Ketelsen
			</p>
        <p className="text-xl md:text-2xl text-gray-500">Explorer, Pioneer, Early Adopter</p>
      </div>
    </div >
  );
}
