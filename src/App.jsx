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
    <Card texto ={"Entradas"} valor={"450"}/>
    <Card texto ={"Saídas"} valor={"250"}/>
    <Card texto ={"Total"} valor={"700"}/>

   </div>
</div>


  )
}

export default App
