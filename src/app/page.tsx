'use client'

import { ProjectDataModel } from '@/datamodels/ProjectDataModel';
import {ProjectCard} from '@/components/ProjectCard';


// pages/index.js
import { useEffect, useState } from 'react';
import { PortfolioPage } from '@/pages/portfolio';

export default function HomePage() {
  
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError('');  // Reset any previous error messages

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.authorized) {
          setIsAuthorized(true);
        } else {
          setError('Incorrect password, please try again.');
        }
      } else {
        setError('An error occurred. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection.');
    }
  };

  return (
    <div>
      {!isAuthorized ? (
        <div className="min-h-screen flex items-center justify-center">
          <form onSubmit={handleSubmit} className="p-8 bg-white shadow-md rounded">
            <h1 className="text-xl font-bold mb-4">Enter Password to Access</h1>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="border p-2 w-full mb-4"
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <PortfolioPage/>
      )}
    </div>
  );
}
