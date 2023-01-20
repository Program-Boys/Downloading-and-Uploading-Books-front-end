import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em;

  img {
    width: 70%;
    max-width: 250px;
  }

  h1 {
    color: #fff;
    font-size: 0.5em;
  }

  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 1em;
    }
  }

  @media (min-width: 1024px) {
    img {
      width: 50%;
      max-width: 320px;
    }

    h1 {
      font-size: 1.4em;
    }
  }
`;
