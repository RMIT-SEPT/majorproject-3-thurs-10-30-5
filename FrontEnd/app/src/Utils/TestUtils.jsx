import React from 'react';
import PropTypes from 'prop-types';

import { Provider as BumbagProvider } from 'bumbag';

import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

const Providers = ({ subProviders }) => {
  return (
        <BumbagProvider>
          <Router>{subProviders}</Router>
        </BumbagProvider>
  );
};

export * from '@testing-library/react';
export { render };

Providers.propTypes = {
  subProviders: PropTypes.node.isRequired
};

