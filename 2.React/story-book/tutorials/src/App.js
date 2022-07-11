import React from 'react'
import { Counter } from './design-system/atoms/Counter'
import Test from './design-system/moles/Test'

function App() {
  return (
    <div>
      <h1>Welcome to React App</h1>
      <h3>Date : {new Date().toDateString()}</h3>
      <h3>JSX Test</h3>
      <Test />

      <h3>TSX Test </h3>
      <Counter />

      <h3>CSS Test</h3>
      <div className="blue">CSS</div>

      <h3>SCSS Test</h3>

      <h3>SVG Test </h3>

      <h3>Img Test</h3>

      <h3>Story Book Test</h3>

      <h3></h3>
    </div>
  )
}

export default App
