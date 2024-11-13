import { StaticImageData } from "next/image";

export interface ProjectDataModel{
    title: string;
    imageURL: StaticImageData; //optional
    components: string[];
    description: string;
}
  