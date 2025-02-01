import react from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'

function App() {

  return (
    <>
      <div className="p-5  ">
        <h1 className="text-red-500">This is Red Text</h1>
        <h2 className="text-blue-600">This is Blue Text</h2>
        <p className="text-green-400">This is Green Text</p>
      </div>
      <Nav />

    </>
  )
}

export default App
