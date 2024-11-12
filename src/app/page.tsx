'use client'

import { ProjectDataModel } from '@/datamodels/ProjectDataModel';
import {ProjectCard} from '@/components/ProjectCard';
// pages/index.js
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink('portfolio')
  }, []);

  const getProjectCardsData = () =>{
    let card1 = {
      title: "Aristocrat Connex",
      imageURL: "",
      components: ["NodeJS", "Python", "RabbitMQ", "SocketIO", "AWS"],
      description: "Server that manages multiple game events in realtime and notifies numerous users of their badges that they achieved via mobile notifications"
    } as ProjectDataModel;

    let card2 = {
      title: "Buffalo Big Wheel",
      imageURL: "",
      components: ["NodeJS", "RabbitMQ", "SocketIO", "Unity"],
      description: "Designed architecture and game flow (e.g. game sequences and SocketIO communications). Implemented adapter for capacitive touch hardware to control Unity game"
    } as ProjectDataModel;

    let card3 = {
      title: "AWS AutoDep Tool",
      imageURL: "",
      components: ["Python", "BOTO3", "AWS"],
      description: "Internal tool used by various departments to deploy their apps onto AWS. It handled secrets, credentials, and config files for various AWS components (e.g. ElasticBeanstalk, DynamoDB, EC2, Lambda, etc.",
    } as ProjectDataModel;

    const result = [card1, card2, card3];
    return result;
  }

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center p-4 animate-fadeIn">
      
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
      <ProjectCard projectCards={getProjectCardsData()}></ProjectCard>
    </div>
  );
}
