import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import env from '../../config/env'

import ProductCard from '../atoms/product-card'
import Text from '../atoms/text'

const TitledProductCard = props => {
  // console.log(`${env.imagesBaseUrl}/w185/${props.image}`)
  return (
    <TouchableOpacity onPress={props.onPress}>
      <ProductCard
        source={{ uri: `${env.imagesBaseUrl}/w185/${props.image}` }}
        resizeMode='stretch'
      >
        <TitleWrapper>
          <Text
            numberOfLines={1}
            ellipsizeMode='tail'
          >
            {props.title}
          </Text>
        </TitleWrapper>
      </ProductCard>
    </TouchableOpacity>
  )
}

export default TitledProductCard

const TitleWrapper = styled.View`
  width: 100%;
  background-color: #000000;
  opacity: 0.8;
`
