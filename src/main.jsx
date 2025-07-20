import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Make sure Tailwind is set up here
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className=" bg-gray-50 text-gray-900">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
)
