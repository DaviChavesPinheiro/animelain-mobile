import styled from 'styled-components/native';
import FeatherIcons from 'react-native-vector-icons/Feather';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
`;

export const Header = styled.View`
  background-color: #1e1e1e;
  flex-direction: row;
  padding: 16px;

  align-items: center;
`;

export const HeaderTitle = styled.Text`
  margin-right: auto;
  color: #fff;
  font-size: 24px;
  font-family: 'Roboto-Medium';
`;

export const HeaderIcon = styled(FeatherIcons)`
  color: #fff;
  font-size: 24px;
`;

export const Avatar = styled.Image`
  width: 128px;
  height: 128px;

  border-radius: 64px;

  align-self: center;
  margin-top: 30px;
  border-color: #1e1e1e;
  border-width: 3px;
`;
