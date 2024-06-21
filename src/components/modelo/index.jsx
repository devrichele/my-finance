import EntradaCadastro from "../entrada"
import "./styles.css"
import BotaoTransacoes from "../botao"
import { IoIosClose } from "react-icons/io";




export default function Modelo ({onClickModelo}){
    
    return (
    <div className="body-modelo" onClick={onClickModelo} >
      <div className="conteudoModelo">
        <IoIosClose color="#cecece" style={{cursor:"pointer"}}/>
        <form className="modelForm">
            <h1> Cadastrar Transação </h1>
       <div>
        <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 10
            }}>
                <EntradaCadastro placeholder ={"Título"}/>
                <EntradaCadastro placeholder ={"Valor"}/>

            </div>
            <div className="bTransacoes">
              <BotaoTransacoes textoBotao ={"Entrada"}/>
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


// import "./styles.css"

// export default function Modelo ({onClickModelo}){
//     return (
//     <div className="body-teste" onClick={onClickModelo}>
//         <h1>Modelo</h1>
//     </div>
//     )
// }