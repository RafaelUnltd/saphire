import React from 'react'
import { Picker, Platform } from 'react-native'

import FormField from '../atoms/form-field'
import InputLabel from '../atoms/input-label'

const SelectField = props => (
  <FormField bottomSpacing={props.bottomSpacing} fullWidth>
    <InputLabel>{props.label}</InputLabel>
    <Picker
      style={Platform.OS === 'ios' && { height: 100 }}
      itemStyle={Platform.OS === 'ios' && { height: 100, color: 'white' }}
      selectedValue={props.selected}
      onValueChange={(selected) => props.handleChange(selected)}
    >
      {props.items.map(item => (
        <Picker.Item
          key={item.value}
          value={item.value}
          label={item.label}
        />
      ))}
    </Picker>
  </FormField>
)

export default SelectField
