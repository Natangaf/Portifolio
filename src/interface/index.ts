import { UseFormRegisterReturn } from "react-hook-form/dist/types";

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
  register: UseFormRegisterReturn;
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

export interface iProjecProviderProps {
  children: React.ReactNode;
}

export interface iProjecProviderValue {
  Idproject: number,
  setIdproject: React.Dispatch<React.SetStateAction<number>>,
  slide: Variants,
  listProject: IProductProps[],
  setlistProject: React.Dispatch<React.SetStateAction<IProductProps[] >>
}
export interface iImgLanguages {
  language: string
}
interface Variants {
  [key: string]: any
}
export type FormValues = {
  name: string;
  email: string;
  mensage: string;
};