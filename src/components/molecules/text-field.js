import React from 'react'

import FormField from '../atoms/form-field'
import TextInput from '../atoms/text-input'
import InputLabel from '../atoms/input-label'

const TextField = props => (
  <FormField bottomSpacing={props.bottomSpacing} fullWidth>
    <InputLabel>{props.label}</InputLabel>
    <TextInput
      placeholder={props.placeholder}
      autoCapitalize={props.autoCapitalize || 'none'}
      keyboardType={props.keyboardType ? props.keyboardType : 'default'}
      returnKeyType={props.returnKeyType ? props.returnKeyType : 'done'}
      onSubmitEditing={props.onSubmitEditing ? props.onSubmitEditing : () => {}}
      onChangeText={props.onChangeText}
      secureTextEntry={props.password}
      placeholderTextColor='#626262'
      underlineColorAndroid='transparent'
    />
  </FormField>
)

export default TextField
