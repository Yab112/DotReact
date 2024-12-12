import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { fetchBooks } from "../../Services/BookService";
import AddBookDialog from "./AddBookDialog";
import { List, Book, BookDownIcon } from "lucide-react";

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  description: string;
  coverImagePath: string;
  filePath: string;
}

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const booksData = await fetchBooks();
        setBooks(booksData);
      } catch (err) {
        setError("Failed to load books. Please try again later.");
      }
    };

    getBooks();
  }, []);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">  
        <h2 className="text-2xl font-bold text-center text-cyan-700  flex justify-center items-center w-full">
          Your Monochrome Library
        </h2>
        <List className="h-8 w-8 inline-block mr-1 text-cyan-900 cursor-pointer" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {books.length > 0 ? (
          books.map((book, index) => <BookCard key={index} book={book} />)
        ) : (
          <div className="flex flex-col items-center justify-center h-60 w-[40rem] bg-gray-100 rounded-lg shadow-md ml-[450px] p-2">
            <BookDownIcon className="h-24 w-24 text-cyan-400 mb-4" />
            <div className="text-center text-gray-500 text-xl mb-4">
              No Books Here
            </div>
            <AddBookDialog />
            <p className="text-center text-gray-800 mt-4 text-lg ml-4">
              Start adding books to build your library!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookList;
