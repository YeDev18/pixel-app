import tailwind from "@/app/img/tailwind.png";
import react from "@/app/img/react.png";
import nodejs from "@/app/img/nodejs.png";
import Javascript from "@/app/img/Javascript logo.png";
import next from "@/app/img/next.png";
import laravel from "@/app/img/laravel.jpg";
import figma from "@/app/img/figma.png";
import github from "@/app/img/github.png";
import bootstrap5 from "@/app/img/bootstrap5.png";

interface StackItem {
  id: number;
  label: string;
  image: StaticImageData; 
}

export const stackData: StackItem[] = [
  {
    id: 1,
    label: "Tailwind",
    image: tailwind,
  },
  {
    id: 2,
    label: "React",
    image: react,
  },
  {
    id: 3,
    label: "Node Js ",
    image: nodejs,
  },
  {
    id: 4,
    label: "JavaScript",
    image: Javascript,
  },
  {
    id: 5,
    label: "Next.js",
    image: next,
  },
  {
    id: 6,
    label: "Laravel",
    image: laravel,
  },
  {
    id: 7,
    label: "Figma",
    image: figma,
  },
  {
    id: 8,
    label: "GitHub",
    image: github,
  },
  {
    id: 9,
    label: "Bootstrap 5",
    image: bootstrap5,
  },
];
