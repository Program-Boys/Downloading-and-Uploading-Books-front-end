import { useContext, useState } from 'react';
import { BookContext } from '../../context/Books/BooksContext';
import { StyledMain, StyledUl } from './style';
import bookImg from '../../assets/book.jpg';
import ModalBase from '../ModalBase';
import { UserContext } from '../../context/User/UserContext';

const Main = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { books } = useContext(BookContext);
  //const { isLogged } = useContext(UserContext);
  const [isLogged] = useState(true);

  return (
    <>
      <StyledMain>
        <div>
          <p>Livros</p>
          <input type="text" placeholder="Pesquisar Livro..." />
          {isLogged ? (
            <button
              onClick={() => {
                setIsOpenModal(true);
              }}
            >
              +
            </button>
          ) : null}
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
      {isOpenModal ? <ModalBase setIs={setIsOpenModal}>Modal</ModalBase> : null}
    </>
  );
};

export default Main;
