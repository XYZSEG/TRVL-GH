import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface HeroCarouselProps {
  slides?: Array<{
    imageUrl: string;
    title: string;
    description: string;
  }>;
  autoRotate?: boolean;
  rotationInterval?: number;
}

const HeroCarousel = ({
  slides = [
    {
      imageUrl: "https://images.unsplash.com/photo-1580881977107-bf99903c0e08",
      title: "Cape Coast Castle",
      description: "Experience the rich history of Ghana's coastal heritage",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1580881978009-91c9b7b40024",
      title: "Kakum National Park",
      description: "Walk among the treetops in Ghana's rainforest",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1580881977120-7ea5c9b27467",
      title: "Mole National Park",
      description: "Safari adventures in Ghana's largest wildlife park",
    },
  ],
  autoRotate = true,
  rotationInterval = 5000,
}: HeroCarouselProps) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoRotate) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, rotation