import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { PhotoCard } from '../components/PhotoCard'
import { Loader } from '../components/Loader'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id:ID!) {
    photo(id:$id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
const renderProps = ({ loading, error, data }) => {
  if (loading) {
    return <Loader />
  }
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => {
  return (
    <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
      {renderProps}
    </Query>
  )
}
