import React from 'react'
import { Animated } from 'react-native'
import styled from 'styled-components/native'

export class Loading extends React.Component {
  constructor (props) {
    super(props)
    this.opacity = new Animated.Value(0.9)
  }

  componentDidMount () {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.opacity, {
          duration: 1000,
          toValue: 0.4
        }),
        Animated.timing(this.opacity, {
          duration: 1000,
          toValue: 0.9
        })
      ])
    ).start()
  }

  render () {
    return <Placeholder style={{ opacity: this.opacity }} />
  }
}

const ProductCard = styled.ImageBackground`
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  
  height: 139;
  width: 93;
  margin-horizontal: 5;
  border-radius: 5;
`

const ProductCardPlaceholder = styled.View`
  background-color: #000000;
  height: 139;
  width: 93;
  margin-horizontal: 5;
  border-radius: 5;
`

export const Placeholder = Animated.createAnimatedComponent(ProductCardPlaceholder)
export default ProductCard
