import axios from 'axios';
import { toast } from '../src/hooks/use-toast';

const API_BASE_URL = 'https://dotbackendexpresswithjs.onrender.com';

export const fetchBooks = async () => {
  try {
    const token = localStorage.getItem('token'); 
    const response = await axios.get(`${API_BASE_URL}/api/books`, {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });
    return response.data; 
  } catch (error) {
    console.error('Failed to fetch books:', error);
    throw error; 
  }
};



interface BookData {
  title: string;
  author: string;
  description: string;
  price: string | number;
  file: File | null;
  coverImage: File | null;
}

interface BookResponse {
  message: string;
  id: string;
  title: string;
  author: string;
  description: string;
  price: string | number;
  filePath: string;
  coverImagePath: string;
}

export const createBook = async (bookData: BookData): Promise<BookResponse> => {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Authorization token is missing');
    }
    const formData = new FormData();
    formData.append('title', bookData.title);
    formData.append('author', bookData.author);
    formData.append('description', bookData.description);
    formData.append('price', bookData.price.toString());
    if (bookData.file) {
      formData.append('file', bookData.file);
    }

    if (bookData.coverImage) {
      formData.append('coverImage', bookData.coverImage);
    }
    

    const response = await axios.post<BookResponse>(`${API_BASE_URL}/api/books`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if(response.status != 201){
      toast({
        title: 'Error',
        description: response.data.message,
      });
    }
    console.log('Book created:', response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to create book:', error);
    throw error;
  }
};
