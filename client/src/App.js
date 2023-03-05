import './App.css';
import React, { useState } from 'react'

const App = () => {

  const [form,setform] = useState({
      amount: 0,
      description: "test",
      date: ""
  })


  async function handleSubmit(e){
    e.preventDefault()
    const res = await fetch("http://localhost:4000/transaction", {
      method: "POST",
      body: JSON.stringify(form),
    });
    console.log(res)
  }

  function handleInput(e) {
    setform({...form, [e.target.name] : e.target.value})
  }

  return (
    <div>
     <form onSubmit={handleSubmit}>
      <input type="number" value={form.amount} name="number" onChange={handleInput} placeholder=''/>
      <input type="description"   value={form.description} name="description" onChange={handleInput} placeholder=''/>
      <input type="date"   value={form.date} onChange={handleInput} name="date" placeholder=''/>
      <button>Submit</button>
     </form>
    </div>
  )
}

export default App
