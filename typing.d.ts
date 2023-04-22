import { isNumberObject } from "util/types";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export interface UserType {
  id: number;
  img: string;
  firstname: string;
  lastname: string;
  city: string;
  country: string;
  detail: string;
  password: string;
  email: string;
  fav: string[];
}

export interface ProductsType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
  hasPrime?: any;
}

export interface Collections {
  id: number;
  mainImg: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  tag: string;
  view: string;
}
