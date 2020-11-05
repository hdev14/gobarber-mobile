import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 60px;
  padding: 0 30px;
`;

export const Availabilities = styled.FlatList.attrs({
  numColumns: 2,
  showVerticalScrollIndicator: false,
})`
  margin: 30px 0;
`;

export const Hours = styled(RectButton).attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.3,
  shadowRadius: 3.84,
  elevation: 3,
})`
  flex: 1;
  margin: 0 15px 10px;
  padding: 20px;
  opacity: ${(props) => (props.enabled ? 1 : 0.7)};
  background-color: #f9f5f0;
  align-items: center;
  border-radius: 4px;
`;

export const HoursText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #321313;
`;
