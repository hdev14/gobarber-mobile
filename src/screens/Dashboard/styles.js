import styled from 'styled-components/native';

export const DashboardShape = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #140e02;
  margin-top: 20px;
  text-transform: capitalize;
`;

export const AppointmentList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30},
})`
  margin-top: 15px;
`;
