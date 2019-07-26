import React from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components/native'

import Text from '../atoms/text'

import TitledProductCard from './titled-product-card'
import { Loading } from '../atoms/product-card'

const ProductHorizontalList = props => (
  <ListWrapper bottomSpacing={props.bottomSpacing}>
    <ListLabel
      size={14}
      color='#FFFFFF'
      weight='500'
    >
      {props.title}
    </ListLabel>
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 10 }}
      showsHorizontalScrollIndicator={false}
      horizontal
      scrollEnabled={!props.isFetching}
    >
      {!props.isFetching ? (
        props.products.map(product => (
          <TitledProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.poster_path}
          />
        ))
      ) : (
        [1, 2, 3, 4, 5, 6].map((i) => (
          <Loading key={i} />
        ))
      )}
    </ScrollView>
  </ListWrapper>
)

export default ProductHorizontalList

const ListWrapper = styled.View`
  flex-direction: column;
  width: 100%;
  margin-bottom: ${props => props.bottomSpacing || 0}
`

const ListLabel = styled(Text)`
  margin-bottom: 10;
  margin-horizontal: 15;
`
