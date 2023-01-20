import Context from './context/Context';
import { UserContext } from './context/User/UserContext';
import GlobalStyle from './style/globalStyle';

function App() {
  return (
    <>
      <Context>
        <GlobalStyle />
      </Context>
    </>
  );
}

export default App;
