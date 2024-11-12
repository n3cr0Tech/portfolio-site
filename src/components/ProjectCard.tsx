
import {ProjectDataModel} from "../datamodels/ProjectDataModel";

const ProjectCard = (props: {projectCards: ProjectDataModel[]}) =>{

    return (
        <div className="flex flex-col space-y-6 w-full max-w-2xl">
            {props.projectCards.map((e, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden w-full">
                    <h2 className="text-xl font-semibold p-4 border-b text-black">{e.title}</h2>
                    <div className="w-full h-48 bg-gray-300"></div>
                    <p className="p-4 text-black">{e.description}</p>
                    <div className="p-4 text-gray-400 text-xs">
                        <span className="block">Components:</span>              
                        <span>
                            {e.components.map((c, ci) => (
                                <h4 key={ci}>{c}</h4>
                            ))}
                        </span>
                    </div>
                </div>
                ))}
        </div>        
    )

}

export {ProjectCard}