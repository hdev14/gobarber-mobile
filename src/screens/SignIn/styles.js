import {Platform} from 'react-native';
import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const SignInContainer = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 20px;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const SignOutLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SOLText = styled.Text`
  color: #321313;
  font-size: 15px;
`;

export const SOLTextBold = styled.Text`
  color: #f4991a;
  font-size: 15px;
`;
