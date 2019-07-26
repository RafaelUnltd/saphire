import React from 'react'
import styled from 'styled-components/native'

import Text from '../atoms/text'

const SubmitButton = props => (
  <SubmitWrapper {...props}>
    <Text
      weight='600'
      color='#FFFFFF'
      size={14}
      align='center'
    >
      {props.children}
    </Text>
  </SubmitWrapper>
)

export default SubmitButton

const SubmitWrapper = styled.TouchableOpacity`
  background-color: ${props => props.theme.primary}
  border-radius: 5;
  padding-vertical: 12;
  padding-horizontal: 12;

  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.23;
  shadow-radius: 2.62;

  elevation: 4;

  ${props => props.fullWidth && `width: 100%;`}
`
