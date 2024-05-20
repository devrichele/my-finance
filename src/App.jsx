import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<div className='body'> 
<h1 className=''> my finance </h1>
<button>Nova Transação </button>
<div class="card">
      <div class="card-item">Entradas</div>
      <div class="card-item">Saídas</div>
      <div class="card-item">Total</div>

<p> Título Valor Categoria Data </p>
</div>
</div>
  )
}

export default App
