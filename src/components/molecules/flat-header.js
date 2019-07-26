import React from 'react'
import styled from 'styled-components/native'

import SaphireLogo from './saphire-logo'

const FlatHeader = () => (
  <HeaderWrapper>
    <SaphireLogo
      width={90}
      height={25}
    />
  </HeaderWrapper>
)

export default FlatHeader

const HeaderWrapper = styled.View`
  background-color: ${props => props.theme.backgroundDark};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60;
`
