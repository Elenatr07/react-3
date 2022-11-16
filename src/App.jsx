
import './App.css';
import { Form } from './components/Form/Form';
import { Form as FormClass } from './class-components/Form';
import { Count as CountClass } from './class-components/Count';
import { Count } from './components/Count';
import { Child } from './components/Child';
import { useState } from 'react';
import './index.css'



export const App = () => {
  const [name, setName] = useState('Jon')
  const [count, setCount] = useState(0)
  const handleChangeName = (ev) => {
    setName(ev.target.value)
  }
  const arr = ['ivanov', 'petrov', 'sidorov']
  return (
    <div className="App">
      <h2 style={{ backgroundColor: 'green' }}> Class component</h2>
      <Form />
      <h3> Parent component</h3>
      <p> {count}</p>
      <input onChange={handleChangeName} />
      <h3> Child component</h3>
      <Child name={name} handleChangeCount={setCount} />
      <CountClass count={10} />
      <FormClass />
      <hr />
      <h2> Fun components</h2>
      <Count name="Ivan" />
      <hr />
      {arr.map((item, idx) => <div key={idx} >{item}</div>)}
    </div>
  )
}

