import * as yup from 'yup';

export const bookSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  gender: yup.string().required('Gênero obrigatório'),
  file: yup.mixed().required(),
});
