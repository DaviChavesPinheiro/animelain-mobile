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

export const UserName = styled.Text`
  align-self: center;
  margin-top: 15px;
  color: #ddd;
  font-size: 16px;
  font-family: 'Roboto-Medium';
`;

export const StatsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  margin-top: 10px;
`;

export const Stat = styled.View`
  align-items: center;
  width: 90px;
  margin: 0px 2px;
`;

export const StatNumber = styled.Text`
  align-self: center;
  color: #eee;
  font-size: 17px;
  font-family: 'Roboto-Medium';
  font-weight: bold;
`;

export const StatText = styled.Text.attrs(props => ({
  numberOfLines: 2,
}))`
  align-self: center;
  color: #888;
  font-size: 13px;
  font-family: 'Roboto-Regular';
  text-align: center;

  margin-top: 5px;
`;

export const EditProfileButton = styled.TouchableOpacity`
  width: 80%;
  max-width: 500px;
  align-self: center;
  padding: 5px 10px;
  margin-top: 20px;

  border-radius: 3px;
  border-color: #555;
  border-width: 1px;
`;

export const EditProfileButtonText = styled.Text`
  align-self: center;
  color: #eee;
  font-size: 15px;
  font-family: 'Roboto-Medium';
`;
