import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchMovies } from '../@saphire/cdk/actions/home-actions'

class HomeMoviesProvider extends React.PureComponent {
  componentDidMount () {
    this.props.fetchMovies()
  }

  render () {
    console.log(this.props.isFetching)
    return this.props.children(
      this.props.data,
      this.props.isFetching,
      this.props.error
    )
  }
}

const mapStateToProps = store => ({
  isFetching: store.homeState.isFetching,
  error: store.homeState.error,
  data: {
    poster: store.homeState.poster,
    recent: store.homeState.recent,
    popular: store.homeState.popular,
    trending: store.homeState.trending
  }
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovies
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeMoviesProvider)
