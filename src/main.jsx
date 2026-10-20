import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Disable automatic browser scroll restoration to prevent cumulative drift on reloads
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

createRoot(document.getElementById('root')).render(
  <App />
)

