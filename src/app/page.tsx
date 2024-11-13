'use client'

import Image from 'next/image';
// pages/index.js
import { useState } from 'react';
import dogPic from "@/assets/dog.jpg"

export default function HomePage() {
  const [activeLink, setActiveLink] = useState('');

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center p-4">
      
      {/* Title Card */}
      <div className="p-6 text-center mb-8 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-black">John Doe</h1>
      </div>

      {/* Links */}
      <div className="flex space-x-4 mb-8">
        <button
          className={`text-lg ${activeLink === 'portfolio' ? 'text-black underline underline-offset-4' : 'text-gray-400'}`}
          onClick={() => setActiveLink('portfolio')}
        >
          Portfolio
        </button>
        <button
          className={`text-lg ${activeLink === 'projects' ? 'text-black underline underline-offset-4' : 'text-gray-400'}`}
          onClick={() => setActiveLink('projects')}
        >
          Passion Projects
        </button>
      </div>

      {/* Prpject Cards */}
      <div className="flex flex-col space-y-6 w-full max-w-2xl">
        {['Card 1', 'Card 2', 'Card 3'].map((cardTitle, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden w-full">
            <h2 className="text-xl font-semibold p-4 border-b text-black">{cardTitle}</h2>
            <Image
              src={dogPic}
              alt="dog photo"
              layout="responsive"
              width={1920}
              height={1080}
            />
            <p className="p-4 text-black">This is a description of {cardTitle}. It provides details about the content of the card.</p>
            <div className="p-4 text-black">
              <span className="block">Component 1</span>
              <span className="block">Component 2</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
