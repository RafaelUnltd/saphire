import styled from 'styled-components/native'

const TextInput = styled.TextInput`
  background-color: ${props => props.theme.backgroundDark};
  color: #FFFFFF;

  padding-vertical: 14;
  padding-horizontal: 20;
  margin-vertical: 0;
  margin-horizontal: 0;
  border-radius: 5;

  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.23;
  shadow-radius: 2.62;

  elevation: 4;
`

export default TextInput
