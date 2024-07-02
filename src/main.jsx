import React from 'react'
import { createRoot } from 'react-dom/client'

// Styles
import './index.css'
import '@fontsource-variable/inter'

// Components
import { WeatherApp } from './App/WeatherApp'
import { Header } from './components/HeaderComponent/Header'

const root = createRoot(document.getElementById('root'))
root.render(
  <>
    <Header />
    <WeatherApp />
  </>
)
