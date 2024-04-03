
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

export interface iImagesProject {
  page: string,
  img: string
}
export interface iProjectCard {
  imagesProject: iImagesProject
}
export interface IProductProps {
  id: number;
  name: string;
  description: string;
  background: string;
  usedLanguages: string[];
  images: iImagesProject[];
  linkRepo?: string,
  linkSite?: string
}
export type TProductprops = {
  project: IProductProps;
}

export type TProductList = {
  listProject: IProductProps[];
}

export interface ICardProjectProps {
  project: IProductProps;
  listProject: IProductProps[];
}
export interface IPropsMaquinadeEscrever {
  text: string;
  delay: number;
  esconderCursor: boolean
}

interface Variants {
  [key: string]: any
}

export interface iProjecProviderProps {
  children: React.ReactNode;
}

export interface iProjecProviderValue {
  Idproject: number,
  setIdproject: React.Dispatch<React.SetStateAction<number>>,
  listProject: IProductProps[],
  setlistProject: React.Dispatch<React.SetStateAction<IProductProps[]>>
  slide: Variants,
}
export interface iImgLanguages {
  language: string
}
