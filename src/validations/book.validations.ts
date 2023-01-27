import * as yup from 'yup';

export const bookSchema = yup.object().shape({
  file: yup.mixed().required('Arquivo do livro obrigatório'),
});
