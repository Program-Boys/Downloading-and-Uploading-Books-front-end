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
  registerBooks: (arg: IBook) => void;
}

export interface IBook {
  id: string;
  name: string;
  gender: string;
  owner?: IUser;
  createdAt: Date;
  updatedAt: Date;
  file: HTMLInputElement;
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

  const registerBooks = ({ name, gender, file }: IBook) => {
    api
      .post(
        '/books',
        { name, gender },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then((response) => {
        setBooks(response.data);
      });
  };

  return (
    <BookContext.Provider value={{ books, setBooks, registerBooks }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
