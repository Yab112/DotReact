import React from "react";
import CardComponent from "./Card";
import { ArrowBigDown, ArrowBigRight, Eye } from 'lucide-react'
import CustomButton from '../components/Customebutton'

interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  description: string;
  category: string;
}

interface CardListProps {
  images: ImageData[];
}

const CardList: React.FC<CardListProps> = ({ images }) => {
  const handleClikc = () => {
    console.log('Button clicked!')}
  return (
    <>
    <div className="flex flex-wrap mx-auto gap-2 max-w-[99%]">
      {images.map((image, index) => (
        <CardComponent
          key={index}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          title={image.title}
          description={image.description}
          category={image.category}
        />
      ))}

    </div>
    <div className="flex flex-col items-end justify-end my-2 mx-32">
      <CustomButton
        label="View More"
        variant="primary"
        size="medium"
        onClick={handleClikc}
        icon={<ArrowBigRight />}
      />
    </div>
    </>
  );
};

export default CardList;
