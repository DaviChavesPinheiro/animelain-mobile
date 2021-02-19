import styled from 'styled-components/native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Media } from '.';

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

export const BackButton = styled.TouchableOpacity``;

export const HeaderIcon = styled(FeatherIcons)`
  color: #ccc;
  font-size: 24px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  margin-left: 16px;
  background-color: #1e1e1e;
  height: 25px;
  padding: 0;
  font-size: 16px;
  color: white;
`;

export const ListContainer = styled.View`
  margin: 10px;
`;

export const List = styled(FlatList as new () => FlatList<Media>)``;
