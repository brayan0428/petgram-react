import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyles } from './styles/globalStyles'
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'

const App = () => {
  const parameters = new window.URLSearchParams(window.location.search)
  const detail = parameters.get('detail')
  return (
    <>
      <GlobalStyles />
      <Logo />
      {
        detail
          ? <PhotoCardWithQuery id={detail} />
          : <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={3} />
          </>
      }
    </>
  )
}

export default App
