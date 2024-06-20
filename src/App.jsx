import { useState } from "react"
import "./App.css"
import Card from "./components/cards"
import Modelo from "./components/modelo"

// function olamundo (){
//   const age = prompt("Por favor, insira sua idade:");
//   alert("você tem: " + age);

// }
  function App() {
  const [modeloAberto, setModeloAberto] = useState (false)
  
  function alertModeloAberto () {
    setModeloAberto (true)
  }
  function alertModeloFechado () {
    setModeloAberto (false)
  }

// Toda vez que criar uma function colocar em cima do return
// chave só acima do return
// para executar uma function colocar em parenteses
  const isOpenModelo = true

  return (
    <div className='body'>
      <div className='empresa'>
        <h1 className='logo'>Rich Finance</h1>
        <button onClick={() => alertModeloAberto ()} > 
          Nova Transação
        </button>

        {/* <button onClick={() => olamundo()}>
          Olá
        </button> */}

      </div>
      <div className='cards'>
        <Card texto ={"Entradas"} valor={"450,00"}/>
        <Card texto ={"Saídas"} valor={"250,00"}/>
        <Card texto ={"Total"} valor={"700,00"}/>
        
      </div> 
      <div className="gastos">
        <Card type={"baixo"} mudar={450} texto ={"Escola"} valor={"Quarta-feira, 13:00 PM"}/>
        <Card type={"baixo"} mudar={234} texto ={"Curso"} valor={"Sexta-feira, 17:00 PM"}/>
        <Card type={"baixo"} mudar={50} texto ={"Spotify"} valor={"Domingo, 6:00 AM"}/>
        
      </div>
    <Modelo onClickModelo={()=>alertModeloFechado ()}/>

    </div>


  )
}

export default App
