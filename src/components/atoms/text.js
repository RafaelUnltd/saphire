import styled from 'styled-components/native'

const Text = styled.Text`
  font-weight: ${props => props.weight || 'normal'};
  font-size: ${props => props.size || '12'}px;
  color: ${props => props.color || '#FFFFFF'};
  ${props => props.align && `text-align: ${props.align};`}
`

export default Text
