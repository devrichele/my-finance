import EntradaCadastro from "../entrada"
import "./styles.css"
import BotaoTransacoes from "../botao"
import { IoIosClose } from "react-icons/io";
import { useState } from "react";




export default function Modelo ({onClickModelo}){

  const [title, setTitle ] = useState("")
  const [valor, setValor] = useState("")
  const [opcoes, setOpcoes] = useState("")


  function lidarComInupt (eventos){

    console.log(eventos.target.value)


}




   return (
    <div className="body-modelo" onClick={onClickModelo} >
      <div className="conteudoModelo" onClick={(event) => event.stopPropagation()}>
        <IoIosClose color="#cecece" style={{cursor:"pointer"}} size={25}/>
        <form className="modelForm">
            <h1> Cadastrar Transação </h1>
       <div>
          <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 10
            }}>
                <EntradaCadastro placeholder ={"Título"} useOnchange = {lidarComInupt}/>
                <EntradaCadastro placeholder ={"Valor"}/>

          </div>
          <div className="bTransacoes">
            <BotaoTransacoes typeIcon ={"up"} textoBotao ={"Entrada"}/>
            <BotaoTransacoes textoBotao ={"Saída"}/>

          </div>
            </div>
            <button className="Inserirdados">
              Cadastar
            </button>
        </form>
      </div>
    </div>
    )
}


