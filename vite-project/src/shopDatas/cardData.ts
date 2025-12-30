import icon from "../assets/Dicon.svg";
import image1 from "../assets/glassImageA.webp"
import image2 from "../assets/glassImageB.webp"
import image3 from "../assets/glassImageC.webp"
import image4 from "../assets/glassImageD.webp"
import image5 from "../assets/glassImageE.webp"
import image6 from "../assets/glassImageF.webp"
import image7 from "../assets/glassImageG.webp"
import image8 from "../assets/glassImageH.webp"
import image9 from "../assets/glassImageI.webp"
import image10 from "../assets/glassImageJ.webp"
import image11 from "../assets/glassImageK.webp"


export type CardItem = {
  id: number;
  glassId: string;
  title: string;
  icon: string;
  brand: string;
  price: number;
  oldPrice: number;
  image: string;
  color: string;
  category: "men" | "women" | "kids";
}


export const cardData: CardItem[] = [
  {
    id: 1,
    glassId: "EYE-101",
    title: "Classic Aviator Sunglasses",
    icon,
    brand: "Brand 1",
    price: 500,
    oldPrice: 799,
    image: image1,
    color: "Black",
    category: "men",
  },
  {
    id: 2,
    glassId: "EYE-102",
    title: "Wayfarer Style Sunglasses",
    icon,
    brand: "Brand 1",
    price: 1000,
    oldPrice: 1399,
    image: image2,
    color: "Brown",
    category: "men",
  },
  {
    id: 3,
    glassId: "EYE-103",
    title: "Cat Eye Sunglasses",
    icon,
    brand: "Brand 1",
    price: 1500,
    oldPrice: 1999,
    image: image3,
    color: "Red",
    category: "women",
  },
  {
    id: 4,
    glassId: "EYE-104",
    title: "Sporty Wraparound Sunglasses",
    icon,
    brand: "Brand 1",
    price: 2000,
    oldPrice: 2499,
    image: image4,
    color: "Blue",
    category: "men",
  },
  {
    id: 5,
    glassId: "EYE-105",
    title: "Round Retro Sunglasses",
    icon,
    brand: "Brand 1",
    price: 699,
    oldPrice: 999,
    image: image5,
    color: "Silver",
    category: "women",
  },
  {
    id: 6,
    glassId: "EYE-106",
    title: "Oversized Square Sunglasses",
    icon,
    brand: "Brand 1",
    price: 799,
    oldPrice: 1099,
    image: image6,
    color: "Black",
    category: "women",
  },
  {
    id: 7,
    glassId: "EYE-107",
    title: "Gradient Lens Sunglasses",
    icon,
    brand: "Brand 1",
    price: 899,
    oldPrice: 1199,
    image: image7,
    color: "Purple",
    category: "women",
  },
  {
    id: 8,
    glassId: "EYE-108",
    title: "Bamboo Frame Sunglasses",
    icon,
    brand: "Brand 1",
    price: 499,
    oldPrice: 799,
    image: image8,
    color: "Natural",
    category: "kids",
  },
  {
    id: 9,
    glassId: "EYE-109",
    title: "Polarized Fishing Sunglasses",
    icon,
    brand: "Brand 1",
    price: 1299,
    oldPrice: 1699,
    image: image9,
    color: "Blue",
    category: "men",
  },
  {
    id: 10,
    glassId: "EYE-110",
    title: "Designer Round Sunglasses",
    icon,
    brand: "Brand 1",
    price: 1599,
    oldPrice: 2099,
    image: image10,
    color: "Gold",
    category: "women",
  },
  {
    id: 11,
    glassId: "EYE-111",
    title: "Vintage Clubmaster Sunglasses",
    icon,
    brand: "Brand 1",
    price: 899,
    oldPrice: 1299,
    image: image11,
    color: "Brown",
    category: "men",
  },
  {
    id: 12,
    glassId: "EYE-112",
    title: "Minimalist Flat Top Sunglasses",
    icon,
    brand: "Brand 1",
    price: 1099,
    oldPrice: 1499,
    image: image1,
    color: "Matte Black",
    category: "men",
  },
  {
    id: 13,
    glassId: "EYE-111",
    title: "Vintage Clubmaster Sunglasses",
    icon,
    brand: "Brand 1",
    price: 549,
    oldPrice: 899,
    image: image11,
    color: "Black",
    category: "kids",
  },
  {
    id: 14,
    glassId: "EYE-112",
    title: "Minimalist Flat Top Sunglasses",
    icon,
    brand: "Brand 1",
    price: 599,
    oldPrice: 949,
    image: image1,
    color: "Silver",
    category: "kids",
  },
  {
    id: 15,
    glassId: "EYE-110",
    title: "Designer Round Sunglasses",
    icon,
    brand: "Brand 1",
    price: 1699,
    oldPrice: 2199,
    image: image10,
    color: "Rose Gold",
    category: "women",
  },
];
