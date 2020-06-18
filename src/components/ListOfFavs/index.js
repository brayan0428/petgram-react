import React from 'react'
import { Grid, Img } from './styles'
import { Link } from '@reach/router'

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {
        favs.map(fav => (
          <Link to={`/detail/${fav.id}`} key={fav.id}>
            <Img src={fav.src} />
          </Link>
        ))
      }
    </Grid>
  )
}
