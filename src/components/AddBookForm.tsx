import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";
import { createBook } from '../../Services/BookService';

interface AddBookFormProps {
  onClose: () => void; 
}

const AddBookForm: React.FC<AddBookFormProps> = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newBook = {
      title,
      author,
      description,
      price,
      file,
      coverImage,
    };

    try {
      await createBook(newBook);
      toast({
        title: 'Book Added',
        description: `${title} by ${author} has been added to your library.`,
      });
      // Clear form fields
      setTitle('');
      setAuthor('');
      setDescription('');
      setPrice('');
      setFile(null);
      setCoverImage(null);
      // Close the dialog
      onClose();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to add the book. Please try again',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="author">Author</Label>
        <Input
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="price">Price</Label>
        <Input
          id="price"
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="file">Book File</Label>
        <Input
          id="file"
          type="file"
          accept=".pdf,.epub,.docx"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          required
        />
      </div>
      <div>
        <Label htmlFor="coverImage">Cover Image</Label>
        <Input
          id="coverImage"
          type="file"
          accept="image/*"
          onChange={(e) => setCoverImage(e.target.files?.[0] || null)}
          required
        />
      </div>
      <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
        Add Book
      </Button>
    </form>
  );
};

export default AddBookForm;
