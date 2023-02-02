import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../validations/login.validations';
import { FormStyled } from './style';

export interface IForm {
  accountSubmit: SubmitHandler<FieldValues>;
}

export interface SubmitFunction {
  email?: string;
  password?: string;
}

const Form = ({ accountSubmit }: IForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitFunction>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <FormStyled onSubmit={handleSubmit(accountSubmit)}>
      <h3>Formulário de Login</h3>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Digite seu Email"
          {...register('email')}
        />
        <span>{errors.email?.message}</span>

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          placeholder="Digite sua Senha"
          {...register('password')}
        />
        <span>{errors.password?.message}</span>
      </div>

      <button>Entrar</button>
    </FormStyled>
  );
};

export default Form;
