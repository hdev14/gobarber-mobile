import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const ProviderList = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-top: 60px;
`;

export const Provider = styled(RectButton).attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 3,
})`
  flex: 1;
  padding: 20px;
  margin: 0 10px 20px;
  background-color: #f9f5f0;
  align-items: center;
  border-radius: 4px;
`;

export const Name = styled.Text`
  margin-top: 15px;
  font-weight: bold;
  text-transform: capitalize;
`;
