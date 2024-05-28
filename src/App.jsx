import "./App.css"
import Card from "./components/cards"

function App() {
  return (
    <div className='body'>
      <div className='empresa'>
        <h1 className='logo'>Rich Finance</h1>
        <button>Nova Transação</button>
      </div>
      <div className='cards'>
        <Card texto ={"Entradas"} valor={"450,00"}/>
        <Card texto ={"Saídas"} valor={"250,00"}/>
        <Card texto ={"Total"} valor={"700,00"}/>

      </div>
      <div className="card2">
        <Card texto ={"Escola"} valor={"900,00"}/>
        <Card texto ={"Eletropaulo"} valor={"100,00"}/>
        <Card texto ={"Sabesp"} valor={"150,00"}/>

      </div>
    </div>


  )
}

export default App
