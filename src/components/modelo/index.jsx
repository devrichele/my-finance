import EntradaCadastro from "../entrada"
import "./styles.css"
import BotaoTransacoes from "../botao"



export default function Modelo ({onClickModelo}){
    
    return (
    <div className="body-modelo" onClick={onClickModelo} >
      <div className="conteudoModelo">
        <div>
        </div>
        <form>
            <h1> Cadastrar Transação </h1>
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