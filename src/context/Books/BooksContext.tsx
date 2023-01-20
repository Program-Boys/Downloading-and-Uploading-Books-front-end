import React, { createContext, ReactNode, useEffect, useState } from 'react';
import api from '../../services/api';
import { IUser } from '../User/UserContext';

import { Routes, useNavigate } from 'react-router-dom';

interface IBooksProvider {
  children: ReactNode;
}

export interface IBookContext {
  books: IBook[];
  setBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export interface IBook {
  id: string;
  name: string;
  gender: string;
  owner?: IUser;
  createdAt: Date;
  updatedAt: Date;
}

export const BookContext = createContext<IBookContext>({} as IBookContext);

const BookProvider = ({ children }: IBooksProvider) => {
  const [books, setBooks] = useState<IBook[]>({} as IBook[]);
  const navigate = useNavigate();

  useEffect(() => {
    const listBooks = async () => {
      const { data } = await api.get('/books');

      setBooks(data);
    };

    listBooks();
  }, [setBooks]);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
