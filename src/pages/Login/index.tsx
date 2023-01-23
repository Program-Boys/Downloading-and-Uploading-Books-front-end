import { SubmitFunction } from '../../components/Form';
import Form from '../../components/Form';
import Header from '../../components/Header';
import api from '../../services/api';

const PageLogin = () => {
  const formSubmit = (data: SubmitFunction) => {
    api
      .post('/user/login', data)
      .then((response) => {
        const { token, userId } = response.data;

        window.localStorage.setItem('TOKEN', token);
        window.localStorage.setItem('USERID', userId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <Form accountSubmit={formSubmit} />
    </>
  );
};

export default PageLogin;
