import styled from 'styled-components/native';

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30},
})`
  margin-top: 15px;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: #321313;
  margin: 10px 0 15px;
`;
