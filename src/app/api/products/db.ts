interface Product {
  id: number;
  color?: string;
  type: string;
  name: string;
  img: string;
  description: string;
  stock: string;
}

export const products: Product[] = [
  {
    id: 1,
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
    color: "black",
    name: "T-Shirt med tryck",
    img: "url",
    description: "En T-shirt med vår logga på. gjord av 100% bomull",
    stock: "I lager",
  },
  {
    id: 3,
    type: "patch",
    name: "Broderad logga",
    img: "url",
    description: "Vår broderad logga som du kan sätta på din GI eller väska",
    stock: "I lager",
  },
  {
    id: 4,
    type: "patch",
    name: "Broderad logga",
    img: "url",
    description: "Vår broderad logga som du kan sätta på din GI eller väska",
    stock: "I lager",
  },
];
