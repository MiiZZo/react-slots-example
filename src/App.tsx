import { useState } from 'react'
import {
  SomePage
} from './with-slots'

function App() {
  const [count, setCount] = useState(0)
  const [email, setEmail] = useState('')
  return (
    <>
      <SomePage>
        <SomePage.HeaderAction>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </SomePage.HeaderAction>
        <SomePage.Title>
          <h3>Title</h3>
        </SomePage.Title>
        <SomePage.Hero>
          <h1 style={{ textAlign: 'center', marginTop: '0.25rem' }}>Enjoy the app</h1>
        </SomePage.Hero>
        <SomePage.FooterAction>
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </SomePage.FooterAction>
      </SomePage>
    </>
  )
}

export default App
