import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
  margin-bottom: 20px;
`;

export const BannerImage = styled.Image`
  height: 150px;
`;

export const ProfileImage = styled.Image`
  align-self: center;
  border-radius: 5px;
  border-width: 5px;
  border-color: #1e1e1e;
  width: 140px;
  height: 200px;
  margin-top: -70px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 26px;
  font-family: 'Roboto-Medium';
  align-self: center;

  margin-top: 16px;
`;

export const Author = styled.Text`
  color: #aaa;
  font-size: 16px;
  font-family: 'Roboto-Regular';
  align-self: center;
  margin-top: 5px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;
  margin: 25px 0px;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;

export const FeatherIcons = styled(Feather)`
  color: #03a9f5;
  font-size: 25px;
`;

export const IoniconsIcons = styled(Ionicons)`
  font-size: 25px;
`;

export const ButtonLabel = styled.Text`
  color: white;
  font-size: 12px;
  font-family: 'Roboto-Regular';
  font-weight: 700;
  align-self: center;
  margin-top: 10px;
`;
