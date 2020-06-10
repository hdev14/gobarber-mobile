import styled from 'styled-components/native';

export const AppointmentShape = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 3,
})`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: #f9f5f0;
  align-items: center;
  padding: 15px;
`;

export const Left = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 14px;
  text-transform: capitalize;
  color: #f4991a;
`;

export const Time = styled.Text`
  color: #140e02;
  font-size: 12px;
  margin-top: 4px;
`;
