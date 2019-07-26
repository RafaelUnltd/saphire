import styled from 'styled-components/native'

const FormField = styled.View`
  flex-direction: column;
  margin-bottom: ${props => props.bottomSpacing || 0}
  ${props => props.fullWidth && `width: 100%;`}
  padding-vertical: ${props => props.paddingVertical || 0};
  padding-horizontal: ${props => props.paddingHorizontal || 0};
`

export default FormField
