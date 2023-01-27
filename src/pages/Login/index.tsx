import { SubmitFunction } from '../../components/Form';
import Footer from '../../components/Footer/index';
import Form from '../../components/Form';
import Header from '../../components/Header';
import api from '../../services/api';
import { useContext } from 'react';
import { UserContext } from '../../context/User/UserContext';
import { useNavigate } from 'react-router-dom';

const PageLogin = () => {
  const { setIsLogged } = useContext(UserContext);
  const navigate = useNavigate();

  const formSubmit = (data: SubmitFunction) => {
    api
      .post('/user/login', data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        window.localStorage.clear();
        const { token, userId } = response.data;

        window.localStorage.setItem('TOKEN', token);
        window.localStorage.setItem('USERID', userId);

        setIsLogged(true);
        navigate('user-homepage', { replace: true });
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
