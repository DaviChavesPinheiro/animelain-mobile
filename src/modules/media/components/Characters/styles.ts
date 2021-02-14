import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
  margin-bottom: 20px;
  padding: 15px 10px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 18px;
  font-family: 'Roboto-Medium';
  width: 100%;
`;

export const CharacterContainer = styled.TouchableOpacity`
  padding: 15px 0px;
  flex-direction: row;
  align-items: center;
  border-bottom-color: #444;
  border-bottom-width: 1px;
`;

export const CharacterImage = styled.Image`
  width: 90px;
  height: 130px;
  border-radius: 2px;
`;

export const CharacterMeta = styled.View`
  margin: 0px 15px;
`;

export const CharacterName = styled.Text`
  flex: 1;
  color: white;
  font-size: 18px;
  font-family: 'Roboto-Medium';
  margin-bottom: 10px;
`;

export const CharacterRole = styled.Text`
  color: #aaa;
  font-size: 14px;
  font-family: 'Roboto-Regular';
`;
