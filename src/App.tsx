import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './view/authentication/login'
import './index.css'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
  ]);

  return (
      <RouterProvider router={ router } />
  )
}

export default App
