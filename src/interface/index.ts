export interface ISchool {
  id: number;
  img: any;
  name: string;
  year: string;
  resume: string;
  descripition: string;
}

export interface ISchoolelement {
  element: ISchool;
}
export interface IinputsContact {
  name: string;
  label: string;
}
export interface IProductprops {
  id: number;
  name: string;
  description: string;
  background: string;
  usedLanguages: string[];
  images: iImagesProject[]
}
export interface iImagesProject {
  page: string,
  img: string
}
export interface iProjectCard {
  imagesProject: iImagesProject
}

export interface IPropsMaquinadeEscrever {
  text: string;
  delay: number;
  esconderCursor: boolean
}

export interface iProjecProviderProps {
  children: React.ReactNode;
}

export interface iProjecProviderValue {
  Idproject: number,
  setIdproject: React.Dispatch<React.SetStateAction<number>>,
  BaseProjects: IProductprops[]
  slide: Variants
}
export interface iImgLanguages {
  language: string
}
interface Variants {
  [key: string]: any
}