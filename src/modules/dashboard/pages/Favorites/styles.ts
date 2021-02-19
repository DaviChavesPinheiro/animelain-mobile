import styled from 'styled-components/native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { UserMedia } from '.';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
`;

export const Header = styled.View`
  background-color: #1e1e1e;
  flex-direction: row;
  padding: 16px;
  padding-bottom: 10px;

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

export const ListContainer = styled.View`
  margin: 10px;
`;

export const List = styled(FlatList as new () => FlatList<UserMedia>)``;
