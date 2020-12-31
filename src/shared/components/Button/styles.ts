import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
  backgroundColor?: string;
  color?: string;
}

interface TextProps {
  color?: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;

  background: ${props => props.backgroundColor || '#03a9f5'};
`;

export const ButtonText = styled.Text<TextProps>`
  font-family: 'Roboto-Medium';
  color: ${props => props.color || '#fff'};
  font-size: 18px;
`;
