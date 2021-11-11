import {useState} from 'react'

function App() {

  const [count, setCount] = useState(0)
  const [user, setUser] = useState('')

  const handleIncrement = () => {
    setCount(count + 1)
  }
  
  const handleOnChange = (e) => {
    setUser(e.target.value)
  }
  // console.log(user);

  

  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <input name="user" onChange={handleOnChange} value={user}/>
    </>
  );
}

export default App;
