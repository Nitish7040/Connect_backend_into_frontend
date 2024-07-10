import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [jokes , setjokes] = useState([])

useEffect(() =>
{
  axios.get('https://localhost:3000/jokes')
  .then((Response) => {
    setjokes(Response.data)
  })
  .catch((error) => {
    console.log(error)
  })
})


  return (
    <>
      <h1>hello Nitish</h1>
      <p>Jokes:{jokes.length}</p>
      {
        jokes.map((joke) => {
          <div key={joke.id}>
            <h3>{joke.title} </h3>
            <p>{joke.content}</p>

          </div>

      })
    }
    </>
  )
}

export default App
