
import {ProjectDataModel} from "../datamodels/ProjectDataModel";
import Image, { StaticImageData } from "next/image";
import { Carousel } from "./Carousel";

export const ProjectCard = (props: {projectCards: ProjectDataModel[]}) =>{

    // const ensureImageDisplay = (imgUrl: StaticImageData) => {    
    //     if (imgUrl.src != null){            
    //         return (
    //             <Image
    //                 src = {imgUrl}
    //                 alt = "img"
    //                 width = {180}
    //                 height = {38}
    //                 layout = "responsive"
    //                 priority
    //             />
    //         )       
    //     }else{
    //         return <p></p>
    //     }
    // }

    return (
        <div className="flex flex-col space-y-6 w-full max-w-2xl">
            {props.projectCards.map((e, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden w-full">
                    <h2 className="text-xl font-semibold p-4 text-black">{e.title}</h2>                    
                    <div className="flex justify-center items-center max-h-[300px] overflow-hidden">
                        {/* {ensureImageDisplay(e.imageURL)} */}
                        <div className="relative w-full h-64 overflow-hidden">
                            <Carousel images={e.imageURLs}/>
                        </div>
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