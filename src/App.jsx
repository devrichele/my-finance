import { useState } from "react"
import "./App.css"
import Card from "./components/cards"
import Modelo from "./components/modelo"





  function App() {
  const [modeloAberto, setModeloAberto] = useState (false)
  const [data, setData] = useState ([])
  
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
        {data.map((item, index) => (
          <Card
            key={index} 
            type={"baixo"} 
            mudar={item.valor} 
            texto ={item.title} 
            valor={item.date.toLocaleString()} 
            typetranse ={item.type}
          />

        ) )}
        
      </div>
    {modeloAberto === true ? (
      <Modelo 
        data={(item) => setData([...data, item])} 
        onClickModelo={()=>alertModeloFechado ()}
      />
    ) : null}


    </div>


  )
}

export default App
