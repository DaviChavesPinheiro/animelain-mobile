import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useAuth } from '../../../auth/hooks/auth';
import {
  Avatar,
  Container,
  EditProfileButton,
  EditProfileButtonText,
  Header,
  HeaderIcon,
  HeaderTitle,
  Stat,
  StatNumber,
  StatsContainer,
  StatText,
  UserName,
} from './styles';

const Profile: React.FC = () => {
  const { user, signOut } = useAuth();

  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <HeaderTitle>Perfil</HeaderTitle>
        <HeaderIcon onPress={signOut} name="bell" size={20} />
      </Header>
      <ScrollView>
        <Avatar source={{ uri: user.avatar?.url }} />
        <UserName>{user.name}</UserName>
        <StatsContainer>
          <Stat>
            <StatNumber>10</StatNumber>
            <StatText>Medias Favoritos</StatText>
          </Stat>
          <Stat>
            <StatNumber>16</StatNumber>
            <StatText>Personages Favoritos</StatText>
          </Stat>
          <Stat>
            <StatNumber>130</StatNumber>
            <StatText>Mangás Favoritos</StatText>
          </Stat>
        </StatsContainer>
        <EditProfileButton onPress={() => navigation.navigate('EditProfile')}>
          <EditProfileButtonText>Editar perfil</EditProfileButtonText>
        </EditProfileButton>
      </ScrollView>
    </Container>
  );
};

export default Profile;
