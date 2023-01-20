import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  max-width: 350px;
  width: 95%;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  height: 350px;
  margin: 100px auto;
  background-color: #5c63ed;
  opacity: 50%;
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
    }
  }

  label {
    font-size: 0.6em;
    color: #f8f9fa;
  }

  input {
    width: 250px;
    height: 30px;
    border: 2px solid transparent;
    outline: none;
    font-size: 0.5em;
    border-bottom: 2px solid #3f3f3f;
    caret-color: #3f3f3f;
    background-color: #212121;
    padding: 10px;
    transition: 0.5s linear;
    font-family: monospace;
    letter-spacing: 1px;
  }

  input:focus {
    border: 2px solid #fa4753;
    caret-color: #fa4753;
    color: #fa4753;
    box-shadow: 4px 4px 10px #070707;
  }

  input:focus::placeholder {
    color: #fa4753;
  }

  button {
    margin-top: 15px;
    background-color: #0086d4;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    width: 250px;
  }
`;
