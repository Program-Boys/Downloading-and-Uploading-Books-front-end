import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  max-width: 350px;
  width: 95%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  height: 350px;
  margin: 100px auto;
  background-color: #5c65ed;
  border-radius: 5px;

  h3 {
    font-size: 0.8em;
    color: #fff;
  }

  div {
    padding: 15px 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;

    span {
      padding: 12px;
      color: #e74c3c;
    }
  }

  label {
    font-size: 12px;
    color: #f8f9fa;
  }

  input {
    width: 250px;
    height: 30px;
    border: 2px solid transparent;
    outline: none;
    font-size: 12px;
    border-bottom: 2px solid #3f3f3f;
    caret-color: #0086d4;
    background-color: #212121;
    color: #fff;
    padding: 10px;
    transition: 0.5s linear;
    font-family: monospace;
    letter-spacing: 1px;
  }

  input:focus {
    border: 2px solid #0086d4;
    caret-color: #0086d4;
    color: #0086d4;
    box-shadow: 4px 4px 10px #070707;
  }

  input:focus::placeholder {
    color: #0086d4;
  }

  button {
    background-color: #000fff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 8px;
    width: 250px;
    font-size: 15px;
  }
`;
