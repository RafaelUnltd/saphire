import { Animated } from 'react-native'
import styled from 'styled-components/native'

const ProductCardPlaceholder = styled.View`
  background-color: #000000;
  height: 139;
  width: 93;
  margin-horizontal: 5;
  border-radius: 5;
  opacity: ${props => props.opacity}
`

export default Animated.createAnimatedComponent(ProductCardPlaceholder)
