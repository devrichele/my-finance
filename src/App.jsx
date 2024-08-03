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
  const isOpenModelo = false

  return (
    <div className='body'>
      <div className='empresa'>
        <h1 className='logo'>Rich Finance</h1>
        <button onClick={() => alertModeloAberto ()} > 
          Nova Transação
        </button>

      </div>
      <div className='cards'>
        <Card texto ={"Entradas"} valor={"450,00"}/>
        <Card texto ={"Saídas"} valor={"250,00"}/>
        <Card texto ={"Total"} valor={"700,00"}/>
        
      </div> 
      <div className="gastos">
        <Card type={"baixo"} mudar={450} texto ={"Escola"} iconpreco= {"-R$"}valor={"Quarta-feira, 13:00 PM"} typetranse ={"Saída"}/>
        <Card type={"baixo"} mudar={234} texto ={"Curso"} iconpreco= {"R$"} valor={"Sexta-feira, 17:00 PM"} typetranse ={"Entrada"}/>
        <Card type={"baixo"} mudar={50} texto ={"Spotify"} iconpreco= {"-R$"} valor={"Domingo, 6:00 AM"} typetranse ={"Saída"}/>
        
      </div>
    {modeloAberto === true ? <Modelo onClickModelo={()=>alertModeloFechado ()}/> : null}


    </div>


  )
}

export default App
