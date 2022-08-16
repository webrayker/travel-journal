import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

export default function App() {
 
  const cards = data.map(item => 
    <Card 
      key={item.id}
      {...item}
    />
  )

  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  )
}

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
{/* <a href="https://vitejs.dev" target="_blank">
<img src="/vite.svg" className="logo" alt="Vite logo" />
</a>
<a href="https://reactjs.org" target="_blank">
<img src={reactLogo} className="logo react" alt="React logo" />
</a> */}
