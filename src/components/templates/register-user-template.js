import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-navigation'

import i18n from '../../config/i18n'
import styled from 'styled-components'

import SaphireLogo from '../molecules/saphire-logo'
import SpacedDescription from '../molecules/spaced-description'
import RegisterUserForm from '../organisms/register-user-form'

const RegisterUserTemplate = props => (
  <SafeArea>
    <ScrollView contentContainerStyle={StyleSheet.absoluteFill}>
      <ContentWrapper>
        <SaphireLogo
          width={220}
          height={60}
          bottomSpacing={50}
        />
        <SpacedDescription
          color='#FFFFFF'
          weight='200'
          align='center'
          size={14}
          bottomSpacing={65}
        >
          {i18n.translate('user_register.greetings')}
        </SpacedDescription>
        <RegisterUserForm
          languages={props.languages}
          selectedLanguage={props.selectedLanguage}
          handleNameChange={props.handleNameChange}
          handleEmailChange={props.handleEmailChange}
          handleLanguageChange={props.handleLanguageChange}
          handleSubmit={props.handleSubmit}
        />
      </ContentWrapper>
    </ScrollView>
  </SafeArea>
)

export default RegisterUserTemplate

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.background};
`

const ContentWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-vertical: 15;
  padding-horizontal: 15;
`
