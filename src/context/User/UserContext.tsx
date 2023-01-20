import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import api from '../../services/api';

interface IUserProvider {
  children: ReactNode;
}

export interface IUserContext {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
}

export interface IUser {
  email: string;
  password: string;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('@TOKEN');
      const userID = localStorage.getItem('@USERID');

      if (token) {
        try {
          api.defaults.headers.common.Authorization = `Bearer ${token}`;
          setIsLogged(true);

          const { data } = await api.get(`/users/${userID}`);

          setUser(data);
        } catch (err) {
          console.log(err);
        }
      }
    };

    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isLogged, setIsLogged }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
