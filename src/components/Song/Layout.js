import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'
import { AuthProvider } from '../Spotify/authContext'
import withLocation from '../../utils/withLocation'
import { useEffect } from 'react'
import { SpotifyPlayerProvider } from '../Spotify/playerContext'

const Container = styled.div`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
`

const Layout = ({ children, location, params, navigate }) => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])

  return (
    <AuthProvider location={location} params={params} navigate={navigate}>
      <SpotifyPlayerProvider>
        <ThemeProvider theme={theme}>
          <Container>{children}</Container>
        </ThemeProvider>
      </SpotifyPlayerProvider>
    </AuthProvider>
  )
}

export default withLocation(Layout)
