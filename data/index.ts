interface ProductProps {
  title: string;
  price: number;
  netto: string;
  img: string;
}

export const products: ProductProps[] = [
  {
    title: "Sabun Cuci Piring",
    price: 15000,
    netto: "500ml",
    img: "/1.png",
  },
  {
    title: "Sabun Laundry",
    price: 20000,
    netto: "500ml",
    img: "/2.png",
  },
];
