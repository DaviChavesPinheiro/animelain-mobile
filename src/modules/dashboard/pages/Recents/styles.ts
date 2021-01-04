import styled from 'styled-components/native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RecentUserAnime } from '.';

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

export const List = styled(FlatList as new () => FlatList<RecentUserAnime>)``;

export const AnimeCard = styled(RectButton)`
  background-color: #1e1e1e;
  border-radius: 3px;
  width: 100px;
  height: 200px;
  overflow: hidden;

  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 10px;
`;

export const AnimeImage = styled.Image`
  width: 100%;
  height: 70%;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

export const AnimeMetaContainer = styled.View`
  height: 30%;
  padding: 8px;
`;

export const AnimeTitle = styled.Text`
  font-size: 14px;
  line-height: 15px;
  color: white;
  font-family: 'Roboto-Regular';
  height: 30px;
`;

export const AnimeAuthor = styled.Text`
  font-size: 13px;
  color: #aaa;
  font-family: 'Roboto-Regular';
`;
