import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = React.createContext([{}, () => {}]);

const UserProvider = props => {
  const [state, setState] = useState({});
  return <UserContext.Provider value={[state, setState]}>{props.children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { UserContext, UserProvider };
