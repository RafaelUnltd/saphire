import React from 'react'
import styled from 'styled-components/native'

import env from '../../config/env'
import i18n from '../../config/i18n'

import Text from '../atoms/text'
import FormField from '../atoms/form-field'
import BannerButton from './banner-button'

const HomeBanner = props => {
  console.log(`${env.imagesBaseUrl}/w720/${props.image}`)
  return (
    <BannerBackground
      source={{ uri: `${env.imagesBaseUrl}/w1280/${props.image}` }}
    >
      <InformationWrapper>
        <FormField bottomSpacing={10}>
          <Text weight={700} size={15} color='#FFF'>{props.title}</Text>
        </FormField>
        <Text
          weight={300}
          size={13}
          color='#FFF'
          numberOfLines={2}
          ellipsizeMode='tail'
        >
          {props.overview}
        </Text>
      </InformationWrapper>
      <ActionsWrapper>
        <BannerButton onPress={props.handleSubmit} fullWidth>
          {i18n.translate('home.watch_now')}
        </BannerButton>
        <BannerButton onPress={props.handleSubmit} fullWidth flat>
          {i18n.translate('home.add_to_my_list')}
        </BannerButton>
      </ActionsWrapper>
    </BannerBackground>
  )
}
export default HomeBanner

const BannerBackground = styled.ImageBackground`
  width: 100%;
  height: 250;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  padding-vertical: 10;
  padding-horizontal: 10;
`

const InformationWrapper = styled.View`
  background-color: rgba(0,0,0,0.3);
  padding-vertical: 10;
  padding-horizontal: 10;
  flex: 5;
`

const ActionsWrapper = styled.View`
  padding-vertical: 10;
  margin-left: 10;
  flex: 3;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`
