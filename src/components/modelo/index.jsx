import EntradaCadastro from "../entrada"
import "./styles.css"
import BotaoTransacoes from "../botao"
import { IoIosClose } from "react-icons/io";
import { useState } from "react";




export default function Modelo ({onClickModelo, data, titleTeste}){

  const [title, setTitle ] = useState("")
  const [valor, setValor] = useState("")
  const [opcoes, setOpcoes] = useState("")


  // function lidarComInupt (eventos){

  //   setTitle(eventos.target.value)
  // }

  function enviar (event){
    event.preventDefault()
    data({title: title,
      date: new Date(),
      valor: valor,
      type: opcoes
    })
    onClickModelo()
  }

  function handleValorChange(event) {

    // pega o valor atual do campo de entrada (numero que a pessoa digitou)
    const inputValor = event.target.value;  
    if (/^\d*$/.test(inputValor)) {
          // confere se é apenas número mesmo
      setValor(inputValor); 
      // se for número mesmo pode mostrar mulé
    }
  }
  


  // function guardarTitle (event) {
  //       event.preventDefault()

  //        data({title:title}),
  //        onClickModelo()
  // }

   return (
    <div className="body-modelo" onClick={onClickModelo} >
      <div className="conteudoModelo" onClick={(event) => event.stopPropagation()}>
        <IoIosClose color="#cecece" style={{cursor:"pointer"}} size={25}/>
        <form onSubmit={enviar} className="modelForm">
            <h1> Cadastrar Transação </h1>
       <div>
          <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 10
            }}>
                <EntradaCadastro title={title} placeholder ={"Título"} useOnchange = {(event) => setTitle (event.target.value)}/>
                <EntradaCadastro value={valor} placeholder ={"Valor"} useOnchange={handleValorChange}/>

          </div>
          <div className="bTransacoes">
            <BotaoTransacoes typeIcon ={"up"} textoBotao ={"Entrada"} onClick = {() => setOpcoes ("entry")}/>
            <BotaoTransacoes textoBotao ={"Saída"} onClick ={() => setOpcoes("exit")}/> 

          </div>
            </div>
            <button onClick={enviar} className="Inserirdados">
              Cadastar
            </button>
        </form>
      </div>
    </div>
    )
}


