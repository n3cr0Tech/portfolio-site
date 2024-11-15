
import {ProjectDataModel} from "../datamodels/ProjectDataModel";
import Image, { StaticImageData } from "next/image";
import { Carousel } from "./Carousel";

export const ProjectCard = (props: {projectCards: ProjectDataModel[]}) =>{

    const ensureImageDisplay = (imgUrls: StaticImageData[]) => {    
        if (imgUrls.length > 0){            
            return (
                <div className="relative w-full h-64 overflow-hidden">
                    <Carousel images={imgUrls}/>
                </div>                
            )       
        }
    }

    return (
        <div className="flex flex-col space-y-6 w-full max-w-2xl">
            {props.projectCards.map((e, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden w-full">
                    <h2 className="text-xl font-semibold p-4 text-black">{e.title}</h2>                    
                    <div className="flex justify-center items-center max-h-[300px] overflow-hidden">                        
                        {ensureImageDisplay(e.imageURLs)}
                    </div>
                    <p className="p-4 text-black">{e.description}</p>                    
                    <div className="p-4 bg-gray-500 text-white text-md p-2">
                        <span className="block">Components:</span>              
                        <span>{e.components.join(', ')}</span>
                    </div>
                </div>
                ))}
        </div>        
    )

}