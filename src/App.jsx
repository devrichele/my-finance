import "./App.css"

function App() {
  return (
<div className='body'>
  <div className='empresa'>
    <h1 className='logo'>my finance</h1>
    <button>Nova Transação</button>
  </div>
  <div className='cards'>
    <div className='card'>
      <h2>Entrada</h2>
      <p>0.00</p>
    </div>
    <div className='card'>
      <h2>Saída</h2>
      <p>0.00</p>
    </div>
    <div className='card'>
      <h2>Total</h2>
      <p>0.00</p>
    </div>
  </div>
</div>


  )
}

export default App
