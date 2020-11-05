import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const ButtonShape = styled(RectButton)`
  height: 46px;
  justify-content: center;
  align-items: center;
  background-color: #321313;
  border-radius: 4px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
