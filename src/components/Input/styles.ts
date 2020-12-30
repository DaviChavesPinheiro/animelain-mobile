import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  background: #333;
  border-width: 1px;
  border-color: #1e1e1e;
  border-radius: 5px;
  margin-bottom: 12px;
  flex-direction: row;
  align-items: center;

  ${props =>
    props.isFocused &&
    css`
      border-color: #03a9f5;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'Roboto-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const Error = styled.Text`
  color: #e87c03;
  font-size: 13px;
  margin: -8px 0px 8px;
  padding-left: 5px;
`;
