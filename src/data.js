import sl1 from "./Assets/img0.png";
import sl2 from "./Assets/img1.png";
import sl3 from "./Assets/img2.png";
export const sliderItems = [
  {
    id: 1,
    title: "Autumn Sale",
    image: sl1,
    desc: "lorem ipsum dolor sit amet",
    bg: "#e7ffff",
  },
  {
    id: 2,
    title: "Summer Sale",
    image: sl2,
    desc: "lorem ipsum dolor sit amet",
    bg: "#e7ccff",
  },
  {
    id: 3,
    title: "Winter Sale",
    image: sl3,
    desc: "lorem ipsum dolor sit amet",
    bg: "#e7eeff",
  },
];

export const item = [
  {
    id: 1,
    image: sl1,
    title: "Product Title",
    description: "Product Description",
    price: 19.49,
  },
  {
    id: 2,
    image: sl2,
    title: "Product Title",
    description: "Product Description",
    price: 17.99,
  },
  {
    id: 3,
    image: sl3,
    title: "Product Title",
    description: "Product Description",
    price: 19.98,
  },
  {
    id: 4,
    image: sl1,
    title: "Product Title",
    description: "Product Description",
    price: 19.99,
  },
  {
    id: 5,
    image: sl2,
    title: "Product Title",
    description: "Product Description",
    price: 19.99,
  },
];

const products = [
  {
    id: 1,
    name: "Product A",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 19.99,
    image: sl1,
  },
  {
    id: 2,
    name: "Product B",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 29.99,
    image: sl2,
  },
  {
    id: 3,
    name: "Product C",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 39.99,
    image: sl2,
  },
  // more products...
];

export default products;