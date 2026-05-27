import { useState } from 'react'
import Home from './pages/Home'
import Layout from "./mainlayout/Layout"
import ThemeProvider from './context/ThemeContext'

const App = () => {

  const [count, setCount] = useState(0)
  console.log(import.meta.env.VITE_GOOGLE_API_KEY)

  return (
    <>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>

    </>
  )
}

export default App
