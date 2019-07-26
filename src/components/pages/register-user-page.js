import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Alert, StatusBar } from 'react-native'

import i18n from '../../config/i18n'
import { withTheme } from 'styled-components/native'

import { subscribeUser } from '../../@saphire/cdk/actions/application-actions'

import RegisterUserTemplate from '../templates/register-user-template'

class RegisterUserPage extends React.PureComponent {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      name: '',
      email: '',
      language: 'pt-BR'
    }

    this.languages = [
      { label: i18n.translate('user_register.language.portuguese'), value: 'pt-BR' },
      { label: i18n.translate('user_register.language.english'), value: 'en-US' },
      { label: i18n.translate('user_register.language.spanish'), value: 'es-AR' }
    ]
  }

  handleChange (key) {
    return (value) => this.setState({
      ...this.state,
      [key]: value
    })
  }

  handleSubmit () {
    if (this.state.name !== '' && this.state.email !== '') {
      this.props.subscribeUser(
        this.state.name,
        this.state.email,
        this.state.language
      )
      i18n.setLocale(this.state.language)
      this.props.navigation.navigate('InternalStack')
    } else {
      Alert.alert(i18n.translate('user_register.fill_all_fields'))
    }
  }

  render () {
    return (
      <React.Fragment>
        <StatusBar backgroundColor={this.props.theme.background} barStyle='light-content' />
        <RegisterUserTemplate
          languages={this.languages}
          selectedLanguage={this.state.language}
          handleNameChange={this.handleChange('name')}
          handleEmailChange={this.handleChange('email')}
          handleLanguageChange={this.handleChange('language')}
          handleSubmit={this.handleSubmit}
        />
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ subscribeUser }, dispatch)

export default connect(null, mapDispatchToProps)(withTheme(RegisterUserPage))
