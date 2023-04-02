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

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: isNumberObject;
}
