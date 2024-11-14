import { ProjectDataModel } from "@/datamodels/ProjectDataModel";
import { useEffect, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";

//work projects
import buffaloBigWheel from '@/assets/buffaloBigWheel.jpg'
import aristoConnex from '@/assets/aristocratConnex.jpeg'
import buffaloTourney from '@/assets/buffaloTourney.jpg'

//personal projects
import yoBatman from '@/assets/yoBatman.png'
import deliverySystem from '@/assets/deliverySystem.png'
import alienEgg from '@/assets/alienEgg.png'

const PortfolioPage = () => {
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
      setActiveLink('portfolio')
    }, []);
    
    const getWorkProjectCardsData = () =>{
        let card1 = {
          title: "Aristocrat Connex",
          imageURL: aristoConnex,
          components: ["NodeJS", "Python", "MongoDB", "RabbitMQ", "SocketIO", "AWS"],
          description: "Server that manages multiple game events in realtime and notifies numerous users of their badges that they achieved via mobile notifications. A scanner component that scanned the User's QR code and logged them into the slot machine"
        } as ProjectDataModel;
    
        let card2 = {
          title: "Buffalo Big Wheel",
          imageURL: buffaloBigWheel,
          components: ["NodeJS", "MongoDB", "RabbitMQ", "SocketIO", "Unity"],
          description: "Designed architecture and game flow (e.g. game sequences and SocketIO communications). Implemented adapter for capacitive touch hardware to control Unity game"
        } as unknown as ProjectDataModel;
    
        let card3 = {
          title: "AWS AutoDep Tool",
          imageURL: {},
          components: ["Python", "PyTest", "BOTO3", "AWS"],
          description: "Internal tool used to deploy apps onto AWS. It handled secrets, credentials, and config files for various AWS components (e.g. ElasticBeanstalk, DynamoDB, EC2, Lambda, etc.)",
        } as ProjectDataModel;
    
        const result = [card1, card2, card3];
        return result;
    }

    const getPersonalProjectsCardData = () =>{
      let card1 = {
        title: "Animatronic 8-Ball",
        imageURL: yoBatman,
        components: ["Python", "Google STT API, Raspberry Pi"],
        description: "Users can say the wake word and the animatronic head will prompt the User to state their yes/no question. Then based on the response being yes or no, the animatronic head will nod or pan as voice lines play."
      } as ProjectDataModel;

      let card2 = {
        title: "Delivery System",
        imageURL: deliverySystem,
        components: ["NodeJS", "React", "Flutter", "MongoDB", "SocketIO"],
        description: "Created a webportal that allows admin users to enter names and addresses that drivers would need to go to. The Flutter app used by drivers will be notified of new destinations and a marker will be placed on the map."
      } as ProjectDataModel;

      let card3 = {
        title: "Alien Egg",
        imageURL: alienEgg,
        components: ["Python", "NodeJS", "Raspberry Pi"],
        description: "Developed a linear actuator that would move a creature upwards, which pushes the egg's flaps open. When the create moves downward, the flaps close up again. A NodeJS server allows the user to trigger the egg remotely"
      } as ProjectDataModel;

  
      const result = [card1, card2, card3];
      return result;
    }

    const getCurrentPage = () => {
    if(activeLink == "passionProjects"){
      return <ProjectCard projectCards={getPersonalProjectsCardData()}></ProjectCard>
    }else{
        return <ProjectCard projectCards={getWorkProjectCardsData()}></ProjectCard>
    }    
    }

    return (
        <div className="min-h-screen bg-gray-200 flex flex-col items-center p-4 animate-fadeIn">
          
          {/* Title Card */}
          <div className="p-6 text-center mb-8 w-full max-w-2xl">      
            <h1 className="text-4xl font-bold text-black" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Jehoshua Josue</h1>
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
              className={`text-lg ${activeLink === 'passionProjects' ? 'text-black underline underline-offset-4' : 'text-gray-400'}`}
              onClick={() => setActiveLink('passionProjects')}
            >
              Passion Projects
            </button>
          </div>
    
          {/* Project Cards */}
          {getCurrentPage()}
          
        </div>
    );
}

export {PortfolioPage}