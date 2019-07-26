import React from 'react'

import i18n from '../../config/i18n'

import ProductHorizontalList from '../molecules/product-horizontal-list'

const GeneralLists = props => (
  <React.Fragment>
    <ProductHorizontalList
      title={i18n.translate('home.popular')}
      products={props.popular}
      onProductClick={props.onProductClick}
      bottomSpacing={20}
      isFetching={props.isFetching}
    />
    <ProductHorizontalList
      title={i18n.translate('home.trending')}
      products={props.trending}
      onProductClick={props.onProductClick}
      bottomSpacing={20}
      isFetching={props.isFetching}
    />
    <ProductHorizontalList
      title={i18n.translate('home.latest')}
      products={props.latest}
      onProductClick={props.onProductClick}
      bottomSpacing={20}
      isFetching={props.isFetching}
    />
  </React.Fragment>
)

export default GeneralLists
