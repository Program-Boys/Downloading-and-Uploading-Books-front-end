import { SubmitFunction } from '../../components/Form';
import Footer from '../../components/Footer/index';
import Form from '../../components/Form';
import Header from '../../components/Header';
import api from '../../services/api';
import { useContext } from 'react';
import { UserContext } from '../../context/User/UserContext';

const PageLogin = () => {
  const { setIsLogged } = useContext(UserContext);

  const formSubmit = (data: SubmitFunction) => {
    api
      .post('/user/login', data)
      .then((response) => {
        const { token, userId } = response.data;

        window.localStorage.setItem('TOKEN', token);
        window.localStorage.setItem('USERID', userId);

        setIsLogged(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <Form accountSubmit={formSubmit} />
      <Footer />
    </>
  );
};

export default PageLogin;
