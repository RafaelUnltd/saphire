import React from 'react'

import FormField from '../atoms/form-field'
import TextField from '../molecules/text-field'
import SubmitButton from '../molecules/submit-button'
import SelectField from '../molecules/select-field'

import i18n from '../../config/i18n'

const RegisterUserForm = props => (
  <FormField paddingHorizontal={15} fullWidth>
    <TextField
      label={i18n.translate('user_register.name.label')}
      placeholder={i18n.translate('user_register.name.placeholder')}
      onChangeText={props.handleNameChange}
      bottomSpacing={15}
    />
    <TextField
      label={i18n.translate('user_register.email.label')}
      placeholder={i18n.translate('user_register.email.placeholder')}
      onChangeText={props.handleEmailChange}
      bottomSpacing={15}
    />
    <SelectField
      label={i18n.translate('user_register.language.label')}
      items={props.languages}
      selected={props.selectedLanguage}
      handleChange={props.handleLanguageChange}
      bottomSpacing={50}
    />
    <SubmitButton onPress={props.handleSubmit}>
      {i18n.translate('user_register.submit')}
    </SubmitButton>
  </FormField>
)
export default RegisterUserForm
