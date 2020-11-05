import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Appointment = styled.View`
  align-items: center;
  justify-content: center;
  width: 200px;
`;

export const Avatar = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 50px;
`;

export const Time = styled.Text`
  color: #f4991a;
  font-size: 16px;
  margin: 4px 0;
  font-weight: normal;
`;

export const SubmitButton = styled(RectButton)`
  height: 46px;
  justify-content: center;
  align-items: center;
  background-color: #321313;
  border-radius: 4px;
  padding: 10px 20px;
  margin-top: 10px;
`;

export const SBText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
