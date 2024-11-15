import { StaticImageData } from "next/image";

export interface ProjectDataModel{
    title: string;
    imageURLs: StaticImageData[]; //optional
    components: string[];
    description: string;
}
  