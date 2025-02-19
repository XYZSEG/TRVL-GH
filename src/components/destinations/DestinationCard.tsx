import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";

interface DestinationCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  price?: string;
  duration?: string;
  category?: string;
}

const DestinationCard = ({
  title = "Cape Coast Castle",
  description = "Historic fortress with rich cultural heritage on Ghana's coast",
  imageUrl = "https://images.unsplash.com/photo-1580881977107-bf99903c0e08",
  price = "$299",
  duration = "2 days",
  category = "Historical",
}: DestinationCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="w-full bg-white"
    >
      <Card className="overflow-hidden h-full">
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <Badge className="absolute top-4 right-4 bg-primary/90 hover:bg-primary">
            {category}
          </Badge>
        </div>

        <CardHeader>
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{duration}</span>
            <span className="font-semibold text-primary">{price}</span>
          </div>
        </CardContent>

        <CardFooter>
          <Button className="w-full">View Details</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default DestinationCard;
