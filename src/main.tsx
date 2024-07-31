import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {NextUIProvider} from '@nextui-org/react'

import { CurrentChatContextProvider } from './context/currentChatContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <CurrentChatContextProvider>
        <App />
      </CurrentChatContextProvider>
    </NextUIProvider>
  </React.StrictMode>,
)
