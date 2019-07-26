import React from 'react'

import styled from 'styled-components/native'

import FormField from '../atoms/form-field'

const SaphireLogo = props => (
  <FormField bottomSpacing={props.bottomSpacing}>
    <Image
      height={props.height}
      width={props.width}
      source={require('../../assets/logo.png')}
      resizeMode='stretch'
    />
  </FormField>
)

export default SaphireLogo

const Image = styled.Image`
  height: ${props => props.height || 25};
  width: ${props => props.width || 24};
`
