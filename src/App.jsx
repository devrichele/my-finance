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
      <div className="gastos">
        <Card type={"baixo"} texto ={"Escola"} valor={"Quarta-feira, 13:00 PM"}/>
        <Card type={"baixo"} texto ={"Curso"} valor={"Sexta-feira, 17:00 PM"}/>
        <Card type={"baixo"} texto ={"Spotify"} valor={"Domingo, 6:00AM"}/>
        
      </div>
    </div>


  )
}

export default App
