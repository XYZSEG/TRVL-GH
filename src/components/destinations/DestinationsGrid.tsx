import React from "react";
import DestinationCard from "./DestinationCard";
import { motion } from "framer-motion";

interface Destination {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  duration: string;
  category: string;
}

interface DestinationsGridProps {
  destinations?: Destination[];
}

const defaultDestinations: Destination[] = [
  {
    id: "1",
    title: "Cape Coast Castle",
    description:
      "Historic fortress with rich cultural heritage on Ghana's coast",
    imageUrl: "https://images.unsplash.com/photo-1580881977107-bf99903c0e08",
    price: "$299",
    duration: "2 days",
    category: "Historical",
  },
  {
    id: "2",
    title: "Kakum National Park",
    description:
      "Tropical rainforest featuring canopy walkway and diverse wildlife",
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa",
    price: "$199",
    duration: "1 day",
    category: "Nature",
  },
  {
    id: "3",
    title: "Bojo Beach",
    description: "Pristine beach with crystal clear waters and golden sands",
    imageUrl: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b",
    price: "$149",
    duration: "1 day",
    category: "Beach",
  },
  {
    id: "4",
    title: "Mole National Park",
    description:
      "Ghana's largest wildlife sanctuary featuring elephants and antelopes",
    imageUrl: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e",
    price: "$499",
    duration: "3 days",
    category: "Safari",
  },
  {
    id: "5",
    title: "Aburi Botanical Gardens",
    description:
      "Historic gardens with exotic plants and peaceful walking trails",
    imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
    price: "$99",
    duration: "Half day",
    category: "Nature",
  },
  {
    id: "6",
    title: "Elmina Castle",
    description:
      "UNESCO World Heritage site with profound historical significance",
    imageUrl: "https://images.unsplash.com/photo-1578914669167-3c31e5dea6e4",
    price: "$249",
    duration: "1 day",
    category: "Historical",
  },
];

const DestinationsGrid = ({
  destinations = defaultDestinations,
}: DestinationsGridProps) => {
  return (
    <div className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Featured Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore Ghana's most captivating locations, from historic castles to
            pristine beaches and wildlife sanctuaries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <DestinationCard
                title={destination.title}
                description={destination.description}
                imageUrl={destination.imageUrl}
                price={destination.price}
                duration={destination.duration}
                category={destination.category}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DestinationsGrid;
