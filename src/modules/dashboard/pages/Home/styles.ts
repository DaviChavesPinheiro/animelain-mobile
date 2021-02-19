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
  padding-bottom: 6px;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  margin-right: auto;
  color: #fff;
  font-size: 24px;
  font-family: 'Roboto-Medium';
`;

export const HeaderButton = styled.TouchableOpacity``;

export const HeaderIcon = styled(FeatherIcons)`
  color: #ccc;
  font-size: 24px;
`;
