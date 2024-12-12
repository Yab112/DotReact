import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  description: string;
  coverImagePath: string;
  filePath: string;
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const handleCardClick = () => {
    if (book.filePath) {
      window.open(book.filePath, '_blank');
    }
  };

  return (
    <Card
      className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 bg-center bg-cover bg-no-repeat cursor-pointer text-center"
      style={{ backgroundImage: book.coverImagePath ? `url(${book.coverImagePath})` : 'none' }}
      onClick={handleCardClick}
    >
      <CardHeader className="bg-opacity-75 bg-black p-4">
        <CardTitle className="text-lg text-white">{book.title}</CardTitle>
      </CardHeader>
      <CardContent className="bg-opacity-75 bg-black p-4">
        <p className="text-cyan-400 mb-2">{book.author}</p>
        <p className="text-sm text-gray-200 mb-4">{book.description}</p>
      </CardContent>
      <CardFooter className="bg-opacity-75 bg-black p-4">
        <Button
          variant="outline"
          size="sm"
          className="w-full bg-cyan-500 text-white hover:bg-cyan-600 hover:text-white"
          onClick={(e) => {
            e.stopPropagation(); 
            handleCardClick();
          }}
        >
          Read Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
