import React from 'react'
import { Article, ImgWrapper, Img } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToogleLikeMutation } from '../../containers/ToogleLikeMutation'
import { Link } from '@reach/router'
const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [show, element] = useNearScreen()

  const [liked, setLiked] = useLocalStorage(key, false)

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <ToogleLikeMutation>
              {
                (toogleLike) => {
                  const handleFavClick = () => {
                    !liked && toogleLike({ variables: { input: { id } } })
                    setLiked(!liked)
                  }

                  return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                }
              }
            </ToogleLikeMutation>
          </>
      }
    </Article>
  )
}
