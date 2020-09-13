import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

const useUser = () => {
  const [state, setState] = useContext(UserContext);

  function setUser(user) {
    setState(user);
  }

  return {
    setUser,
    user: state
  };
};

export default useUser;
