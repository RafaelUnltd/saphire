import React from 'react'
import { StatusBar } from 'react-native'
import { withTheme } from 'styled-components/native'

import HomeTemplate from '../templates/home-template'

class HomePage extends React.PureComponent {
  constructor (props) {
    super(props)

    this.navigateToDetail.bind(this)
  }

  navigateToDetail (id) {
    return () => this.props.navigation.navigate('MovieDetail', { id })
  }

  render () {
    return (
      <React.Fragment>
        <StatusBar backgroundColor={this.props.theme.background} barStyle='light-content' />
        <HomeTemplate
          navigateToDetail={this.navigateToDetail}
        />
      </React.Fragment>
    )
  }
}

export default withTheme(HomePage)
