import styled from 'styled-components';

export const StyledMain = styled.main`
  margin-top: 70px;

  div {
    background-color: #5c63ed;
    border-radius: 5px;
    padding: 10px;
    align-items: center;
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;

    @media (min-width: 750px) {
      max-width: 750px;
    }

    p {
      color: #fff;
      font-weight: bold;
      font-size: 18px;
    }

    input {
      width: 50%;
      height: 30px;
      border: 2px solid transparent;
      outline: none;
      font-size: 12px;
      border-bottom: 2px solid #3f3f3f;
      border-radius: 5px;
      border: none;
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
      background-color: #2fb3ff;
      width: 40px;
      height: 40px;
      border-radius: 8px;
      border: none;
    }
  }
`;

export const StyledUl = styled.ul`
  background-color: #5c63ed;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  overflow-y: auto;
  padding: 8px;
  gap: 5px;
  border-radius: 8px;
  height: 250px;
  width: 95%;

  @media (min-width: 750px) {
    flex-wrap: wrap;
    height: 450px;
    ::-webkit-scrollbar {
      width: 0px;
    }
  }

  li {
    background-color: #fff;
    display: flex;
    text-align: center;
    border-radius: 5px;
    padding: 10px;
    gap: 8px;
    flex-direction: column;
    align-items: center;
    height: 230px;
    font-size: 15px;

    p {
      color: #000000;
    }

    img {
      width: 150px;
    }

    button {
      display: inline-block;
      align-items: center;
      width: 70%;
      position: relative;
      padding: 10px 25px;
      background-color: #0086d4;
      color: white;
      font-family: sans-serif;
      text-decoration: none;
      font-size: 12px;
      text-align: center;
      text-indent: 15px;
      border: none;
    }

    button:hover {
      background-color: #0086d4;
      color: white;
    }

    button:before,
    button:after {
      content: ' ';
      display: block;
      position: absolute;
      left: 15px;
      top: 52%;
    }

    button:before {
      width: 10px;
      height: 2px;
      border-style: solid;
      border-width: 0 2px 2px;
    }

    button:after {
      width: 0;
      height: 0;
      margin-left: 3px;
      margin-top: -7px;
      border-style: solid;
      border-width: 4px 4px 0 4px;
      border-color: transparent;
      border-top-color: inherit;
      animation: downloadArrow 1s linear infinite;
      animation-play-state: paused;
    }

    button:hover:before {
      border-color: #cdefbd;
    }

    button:hover:after {
      border-top-color: #cdefbd;
      animation-play-state: running;
    }

    @keyframes downloadArrow {
      0% {
        margin-top: -7px;
        opacity: 1;
      }

      0.001% {
        margin-top: -15px;
        opacity: 0.4;
      }

      50% {
        opacity: 1;
      }

      100% {
        margin-top: 0;
        opacity: 0.4;
      }
    }
  }

  p {
    margin: 0 auto;
    text-align: center;
    color: #fff;
    font-size: 21px;
    font-weight: bold;
  }

  @media (min-width: 750px) {
    max-width: 750px;
  }
`;
