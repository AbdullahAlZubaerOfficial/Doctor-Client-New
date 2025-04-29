import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  </StrictMode>,
)
