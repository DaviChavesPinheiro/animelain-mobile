import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useAuth } from '../../../auth/hooks/auth';
import { Avatar, Container, Header, HeaderIcon, HeaderTitle } from './styles';

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderTitle>Perfil</HeaderTitle>
        <HeaderIcon name="bell" size={20} />
      </Header>
      <ScrollView>
        <Avatar source={{ uri: user.avatar_url }} />
      </ScrollView>
    </Container>
  );
};

export default Profile;
