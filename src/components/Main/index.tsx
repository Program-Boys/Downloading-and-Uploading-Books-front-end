import { useContext } from 'react';
import { BookContext } from '../../context/Books/BooksContext';
import { StyledMain, StyledUl } from './style';
import bookImg from '../../assets/book.jpg';

const Main = () => {
  const { books } = useContext(BookContext);

  return (
    <StyledMain>
      <div>
        <p>Livros</p>
        <input type="text" placeholder="Pesquisar Livro..." />
      </div>
      <StyledUl>
        {books.length > 0 ? (
          books.map((book) => (
            <li key={book.id}>
              <img src={bookImg} alt="" />
              <p>{book.name}</p>
              <p>{book.gender}</p>
              <button>Download</button>
            </li>
          ))
        ) : (
          <p>Não há livros cadastrados!</p>
        )}
      </StyledUl>
    </StyledMain>
  );
};

export default Main;
