import React from 'react'
import styled from 'styled-components/native'

import Text from '../atoms/text'

const BannerButton = props => (
  <ButtonWrapper {...props}>
    <Text
      weight='400'
      color='#FFFFFF'
      size={12}
      align='center'
    >
      {props.children}
    </Text>
  </ButtonWrapper>
)

export default BannerButton

const ButtonWrapper = styled.TouchableOpacity`
  background-color: ${props => props.flat ? 'transparent' : props.theme.primary}
  border-radius: 4;
  padding-vertical: 6;
  padding-horizontal: 12;

  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.23;
  shadow-radius: 2.62;

  elevation: 4;

  ${props => props.fullWidth && `width: 100%;`}
`
