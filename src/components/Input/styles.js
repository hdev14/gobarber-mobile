import styled from 'styled-components/native';
import {TextInput as TI} from 'react-native';

export const InputShape = styled.View`
  height: 46px;
  flex-direction: row;
  align-items: center;
  background-color: rgba(50, 19, 19, 0.1);
  padding: 0 15px;
  border-radius: 4px;
`;

export const TextInput = styled(TI).attrs({
  placeholderTextColor: 'rgba(20, 14, 2, 0.8)',
})`
  flex: 1;
  margin-left: 10px;
  font-size: 16px;
  color: #140e02;
`;
