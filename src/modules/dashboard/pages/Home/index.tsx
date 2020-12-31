import React from 'react';
import { Container, Header, HeaderIcon, HeaderTitle } from './styles';

import TabRoutes from '../../routes/home.routes';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Anime Lain</HeaderTitle>
        <HeaderIcon name="search" size={20} />
      </Header>
      <TabRoutes />
    </Container>
  );
};

export default Home;
