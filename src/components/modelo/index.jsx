import EntradaCadastro from "../entrada"
import "./styles.css"



export default function Modelo (){
    
    return (
    <div className="body-modelo">
      <div className="conteudoModelo">
        <div>
            
        </div>
        <form>
            <h1> Cadastrar Transação </h1>
            <div>
                <EntradaCadastro />

                <EntradaCadastro />

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