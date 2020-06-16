import React from 'react'
import { GlobalStyles } from './styles/globalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Router } from '@reach/router'
import { Detail } from './pages/Detail'
import { Navbar } from './components/Navbar'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
const UserLogged = ({ children }) => {
  return children({ isAuth: true })
}
const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <UserLogged>
        {
          ({ isAuth }) => (
            isAuth
              ? <Router>
                <Favs path='/favs' />
                <User path='/profile' />
                </Router>
              : <Router>
                <NotRegisteredUser path='/favs' />
                <NotRegisteredUser path='/profile' />
              </Router>
          )
        }
      </UserLogged>
      <Navbar />
    </>
  )
}

export default App
