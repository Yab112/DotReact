import React from "react";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Eye, Download } from "lucide-react";

// Define the props for the Card component
interface CardProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  description: string;
  category: string;
}

// Define the default props
const defaultProps = {
  src: '/default-image.png',
  alt: 'Default Image',
  width: 100,
  height: 100,
  title: 'Default Title',
  description: 'Default Description',
  category: 'Default Category',
};

const CardComponent: React.FC<CardProps> = ({
  src,
  alt,
  width,
  height,
  title,
  description,
  category,
}) => {
  return (
    <Card className="overflow-hidden flex flex-col w-full sm:w-72 md:w-80 lg:w-96">
      <CardContent className="p-0 relative group flex-grow">
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-72 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <div className="flex space-x-2">
            <Button size="sm" variant="secondary" className="flex items-center">
              <Eye className="mr-2 h-4 w-4" />
              View
            </Button>
            <Button size="sm" variant="secondary" className="flex items-center">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4 bg-gray-50">
        <h2 className="text-lg font-semibold mb-1">{title}</h2>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
          {category}
        </span>
      </CardFooter>
    </Card>
  );
};

// Set defaultProps for the component
CardComponent.defaultProps = defaultProps;

export default CardComponent;
