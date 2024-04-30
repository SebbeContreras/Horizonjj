export interface Product {
  id: number;
  color?: string;
  price: number;
  type: string;
  name: string;
  img: string;
  description: string;
  stock: string;
}
export interface ProductProps {
  product: number;
  name: string;
  price: number;
  description: string;
  img: string;
}
export interface CartModel {
  name: string;
  price: number;
  img: string;
}
export const products: Product[] = [
  {
    id: 1,
    price: 144,
    type: "clothes",
    color: "white",
    name: "T-Shirt med tryck",
    img: "url",
    description: "En T-shirt med vår logga på. gjord av 100% bomull",
    stock: "I lager",
  },
  {
    id: 2,
    type: "clothes",
    price: 744,
    color: "black",
    name: "T-Shirt med tryck",
    img: "url",
    description: "En T-shirt med vår logga på. gjord av 100% bomull",
    stock: "I lager",
  },
  {
    id: 3,
    type: "patch",
    price: 644,
    name: "Broderad logga",
    img: "url",
    description: "Vår broderad logga som du kan sätta på din GI eller väska",
    stock: "I lager",
  },
  {
    id: 4,
    type: "patch",
    price: 144,
    name: "Broderad logga",
    img: "url",
    description: "Vår broderad logga som du kan sätta på din GI eller väska",
    stock: "I lager",
  },
];
