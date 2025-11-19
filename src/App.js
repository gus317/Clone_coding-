import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Web_Info/Header'
import Main from './components/Post/Main'
import Popular from './components/Post/Popular'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
       <Route path="/" element={
          <>
            <Main />
            <Popular />
          </>
        } />
      </Routes>

    </div>
  )
}

export default App
