import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import RootRouter from './routes/RootsRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={RootRouter} />
    </>
  )
}

export default App
