import { HeaderStyled } from './style';
import logo from '../../assets/downloading-books.png';
import { UserContext } from '../../context/User/UserContext';
import { useContext, useState } from 'react';

const Header = () => {
  const { isLogged } = useContext(UserContext);

  return (
    <>
      <HeaderStyled>
        <img src={logo} />
        {isLogged ? <h1>HOME</h1> : null}
      </HeaderStyled>
    </>
  );
};

export default Header;
