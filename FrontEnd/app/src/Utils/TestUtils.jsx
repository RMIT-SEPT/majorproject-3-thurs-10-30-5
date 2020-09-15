import React from 'react';
import PropTypes from 'prop-types';

import { Provider as BumbagProvider } from 'bumbag';

import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

const Providers = ({ children }) => {
  return (
    <BumbagProvider>
      <Router>{children}</Router>
    </BumbagProvider>
  );
};

export * from '@testing-library/react';
export { render };

Providers.propTypes = {
  children: PropTypes.node.isRequired
};
