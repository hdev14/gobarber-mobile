import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30},
})`
  margin-top: 15px;
  align-self: stretch;
`;

export const SubmitButton = styled(TouchableOpacity)`
  height: 46px;
  justify-content: center;
  align-items: center;
  background-color: #321313;
  border-radius: 4px;
`;

export const LogoutButton = styled(TouchableOpacity)`
  height: 46px;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  border-radius: 4px;
  margin-top: 10px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: #321313;
  margin: 10px 0 15px;
`;
