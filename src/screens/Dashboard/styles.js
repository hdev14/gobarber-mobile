import styled from 'styled-components/native';

export const DashboardShape = styled.SafeAreaView`
  flex: 1;
`;

export const AppointmentList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30},
})`
  margin-top: 15px;
`;
