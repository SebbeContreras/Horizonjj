export interface Product {
  id: number;
  color?: string;
  price: number;
  type: string;
  name: string;
  img: string;
  description: string;
  stock: string;
  quantity: number;
}
export interface ProductProps {
  id: number;
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
export const products: Array<Product> = [
  {
    id: 1,
    price: 350,
    type: "clothes",
    color: "white",
    name: "T-Shirt med tryck (M)",
    img: "/VitTshirt.png",
    description: "En T-shirt med vår logga på. gjord av 100% bomull",
    stock: "I lager",
    quantity: 0,
  },
  {
    id: 2,
    price: 350,
    type: "clothes",
    color: "white",
    name: "T-Shirt med tryck (S)",
    img: "/VitTshirt.png",
    description: "En T-shirt med vår logga på. gjord av 100% bomull",
    stock: "I lager",
    quantity: 0,
  },
  {
    id: 3,
    price: 350,
    type: "clothes",
    color: "white",
    name: "T-Shirt med tryck (L)",
    img: "/VitTshirt.png",
    description: "En T-shirt med vår logga på. gjord av 100% bomull",
    stock: "I lager",
    quantity: 0,
  },
  {
    id: 4,
    type: "clothes",
    price: 350,
    color: "black",
    name: "T-Shirt med tryck (S)",
    img: "/SvartTshirt.png",
    description: "En T-shirt med vår logga på. gjord av 100% bomull",
    stock: "I lager",
    quantity: 0,
  },
  {
    id: 5,
    type: "clothes",
    price: 350,
    color: "black",
    name: "T-Shirt med tryck (M)",
    img: "/SvartTshirt.png",
    description: "En T-shirt med vår logga på. gjord av 100% bomull",
    stock: "I lager",
    quantity: 0,
  },
  {
    id: 6,
    type: "clothes",
    price: 350,
    color: "black",
    name: "T-Shirt med tryck (L)",
    img: "/SvartTshirt.png",
    description: "En T-shirt med vår logga på. gjord av 100% bomull",
    stock: "I lager",
    quantity: 0,
  },
  {
    id: 7,
    type: "clothes",
    price: 350,
    name: "T-shirt med tryck (XS)",
    img: "/VitTshirt2.png",
    description: "En T-shirt med vår logga på. gjord av 100% bomull",
    stock: "I lager",
    quantity: 0,
  },
  {
    id: 8,
    type: "clothes",
    price: 350,
    name: "T-shirt med tryck (S)",
    img: "/VitTshirt2.png",
    description: "En T-shirt med vår logga på. gjord av 100% bomull",
    stock: "I lager",
    quantity: 0,
  },
  {
    id: 9,
    type: "clothes",
    price: 350,
    name: "T-shirt med tryck (XL)",
    img: "/VitTshirt2.png",
    description: "En T-shirt med vår logga på. gjord av 100% bomull",
    stock: "I lager",
    quantity: 0,
  },
  {
    id: 10,
    type: "patch",
    price: 149,
    name: "Broderad logga (S)",
    img: "/LogoText.svg",
    description: "Vår broderad logga som du kan sätta på din GI eller väska",
    stock: "I lager",
    quantity: 0,
  },
  {
    id: 11,
    type: "patch",
    price: 149,
    name: "Broderad logga (M)",
    img: "/LogoText.svg",
    description: "Vår broderad logga som du kan sätta på din GI eller väska",
    stock: "I lager",
    quantity: 0,
  },
  {
    id: 12,
    type: "patch",
    price: 149,
    name: "Broderad logga (L)",
    img: "/LogoText.svg",
    description: "Vår broderad logga som du kan sätta på din GI eller väska",
    stock: "I lager",
    quantity: 0,
  },
];
