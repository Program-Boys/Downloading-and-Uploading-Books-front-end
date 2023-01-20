import { ReactNode } from 'react';
import BookProvider from './Books/BooksContext';
import UserProvider from './User/UserContext';

interface IContext {
  children: ReactNode;
}

const Context = ({ children }: IContext) => {
  return (
    <UserProvider>
      <BookProvider>{children}</BookProvider>
    </UserProvider>
  );
};

export default Context;
