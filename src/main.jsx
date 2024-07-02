import React from 'react'
import { createRoot } from 'react-dom/client'

// Components
import { App } from './App/App'

const root = createRoot(document.getElementById('root'))
root.render(
  <>
    <App />
  </>
)
