import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './styles'
export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button>
      <Icon size='32px' color={liked ? 'red' : ''} onClick={onClick} />
      {likes} likes
    </Button>
  )
}
