import { useContext, useState } from 'react';
import { BookContext } from '../../context/Books/BooksContext';
import { StyledMain, StyledUl } from './style';
import bookImg from '../../assets/book.jpg';
import ModalBase from '../ModalBase';
import { UserContext } from '../../context/User/UserContext';
import { FormStyled } from '../Form/style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { bookSchema } from '../../validations/book.validations';
import { IForm } from '../Form';

interface SubmitFunction {
  file?: HTMLInputElement;
}

const Main = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { books, registerBooks } = useContext(BookContext);
  //const { isLogged } = useContext(UserContext);
  const [isLogged] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitFunction>({
    resolver: yupResolver(bookSchema),
  });

  const handleCreatedBooks = (data: SubmitFunction) => {
    registerBooks(data);
  };

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
      {isOpenModal ? (
        <ModalBase setIs={setIsOpenModal}>
          <FormStyled onSubmit={handleSubmit(handleCreatedBooks)}>
            <h3>Cadastro de novos livros</h3>
            <div>
              <label>Arquivo</label>
              <input type="file" {...register('file')} />
              <span>{errors.file?.message}</span>
            </div>
            <button>Enviar</button>
          </FormStyled>
        </ModalBase>
      ) : null}
    </>
  );
};

export default Main;
