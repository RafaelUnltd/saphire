import React from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import styled from 'styled-components/native'

import FlatHeader from '../molecules/flat-header'
import HomeBanner from '../molecules/home-banner'
// import ProductHorizontalList from '../molecules/product-horizontal-list'
import GeneralLists from '../organisms/general-lists'

import HomeMoviesProvider from '../../providers/home-movies-provider'

const HomeTemplate = props => (
  <SafeArea forceInset={{ bottom: 'never' }}>
    <FlatHeader />
    <ScrollView>
      <HomeMoviesProvider>
        {(movies, isFetching) => (
          <React.Fragment>
            {movies.poster && (
              <HomeBanner
                image={movies.poster.backdrop_path}
                title={movies.poster.title}
                overview={movies.poster.overview}
              />
            )}
            <ListsWrapper>
              <GeneralLists
                popular={movies.popular}
                trending={movies.trending}
                latest={movies.recent}
                isFetching={isFetching}
              />
            </ListsWrapper>
          </React.Fragment>
        )}
      </HomeMoviesProvider>
    </ScrollView>
  </SafeArea>
)

export default HomeTemplate

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.backgroundDark};
`

const ListsWrapper = styled.View`
  flex: 1;
  padding-vertical: 15;
  background-color: ${props => props.theme.background};
`
