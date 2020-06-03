import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Background = styled(LinearGradient).attrs({
  colors: ['#f2ead3', '#f9f5f0'],
})`
  flex: 1;
`;
