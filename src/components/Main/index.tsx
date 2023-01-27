import { useContext, useState } from 'react';
import { BookContext } from '../../context/Books/BooksContext';
import { StyledMain, StyledUl } from './style';
import bookImg from '../../assets/book.jpg';
import ModalBase from '../ModalBase';
import { UserContext } from '../../context/User/UserContext';
import { FormStyled } from '../Form/style';
import { IForm } from '../Form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { bookSchema } from '../../validations/book.validations';

interface SubmitFunction {
  name?: string;
  gender?: string;
  file?: HTMLInputElement;
}

const Main = ({ accountSubmit }: IForm) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { books, registerBooks } = useContext(BookContext);
  const { isLogged } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitFunction>({
    resolver: yupResolver(bookSchema),
  });

  const handleCreatedBooks = (data) => {
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
              <label>Nome</label>
              <input
                type="text"
                placeholder="Nome do livro"
                {...register('name')}
              />
              <span></span>
              <label>Gênero</label>
              <input
                type="text"
                placeholder="Gênero do livro"
                {...register('gender')}
              />
              <span></span>
              <label>Arquivo</label>
              <input type="file" {...register('file')} />
              <span></span>
            </div>
            <button>Enviar</button>
          </FormStyled>
        </ModalBase>
      ) : null}
    </>
  );
};

export default Main;
