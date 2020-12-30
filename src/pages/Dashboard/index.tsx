import React from 'react';
import { Container } from './styles';

import Routes from '../../routes/dashboard.routes';

const DashBoard: React.FC = () => {
  return (
    <Container>
      <Routes />
    </Container>
  );
};

export default DashBoard;
