import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import App from './App.jsx'
import {ModalContextProvider} from './context/ModalProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalContextProvider>
      <BrowserRouter>
        <App />
     </BrowserRouter>
    </ModalContextProvider>
  </StrictMode>
)
