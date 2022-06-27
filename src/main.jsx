import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { CreateMovie } from './pages/CreateMovie'
import { MoviePreview } from './pages/MoviePreview'
import { Profile } from './pages/Profile'
import { SignIn } from './pages/SignIn'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <SignIn/>
    </ThemeProvider>
  </React.StrictMode>
)
