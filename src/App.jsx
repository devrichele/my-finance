import { useState, useEffect } from "react"
import "./App.css"
import Card from "./components/cards"
import Modelo from "./components/modelo"





  function App() {
  const [modeloAberto, setModeloAberto] = useState (false)
  const [data, setData] = useState ([])
  const [entrada, setEntrada] = useState (0)
  const [saida, setSaida] = useState (0)
  const [total, setTotal] = useState (0)



  function alertModeloAberto () {
    setModeloAberto (true)
  }
  function alertModeloFechado () {
    setModeloAberto (false)
  }

  function handleData (item){
    setData([...data, item])
    if (item.type === "entry" ) {
      setEntrada(entrada+ parseFloat(item.valor)) 
    }else if (item.type === "exit") {
      setSaida(saida+ parseFloat(item.valor) )
    }else {
      setTotal(entrada-saida)
    }
  }




// Toda vez que criar uma function colocar em cima do return
// chave só acima do return
// para executar uma function colocar em parenteses
  const isOpenModelo = false

  useEffect(() => {
    setTotal(entrada - saida)
  }, [entrada, saida])

  return (
    <div className='body'>
      <div className='empresa'>
        <h1 className='logo'>Rich Finance</h1>
        <button onClick={() => alertModeloAberto ()} > 
          Nova Transação
        </button>

      </div>
      <div className='cards'>
        <Card texto ={"Entradas"} valor={entrada}/>
        <Card texto ={"Saídas"} valor={saida}/>
        <Card texto ={"Total"} valor={total}/>
        
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
        data={(item) => handleData(item) } 
        onClickModelo={()=>alertModeloFechado ()}
      />
    ) : null}


    </div>


  )
}

export default App
