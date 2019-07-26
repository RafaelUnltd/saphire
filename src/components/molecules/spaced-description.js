import React from 'react'

import FormField from '../atoms/form-field'
import Text from '../atoms/text'

const SpacedDescription = props => (
  <FormField bottomSpacing={props.bottomSpacing} paddingHorizontal={30}>
    <Text
      size={props.size}
      weight={props.weight}
      color={props.color}
      align={props.align}
    >
      {props.children}
    </Text>
  </FormField>
)

export default SpacedDescription
