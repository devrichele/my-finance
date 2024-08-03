

import "./styles.css"
import { BsArrowBarDown, BsArrowBarUp } from "react-icons/bs"
import { BiDollar } from "react-icons/bi";

function Card({texto, valor, type, mudar, typetranse,iconpreco }) {


    return (
      
        <div className={type == "baixo" ? "cardBaixo" : "card"}>
          <div className="container-card-icon" >
            { texto == "Entradas" && <BsArrowBarUp />}
            { texto == "Saídas" && <BsArrowBarDown />}
            { texto == "Total" && <BiDollar />}
            {type == "baixo" && typetranse == "Saída" && <BsArrowBarDown />}
            {type == "baixo" && typetranse == "Entrada" && <BsArrowBarUp />}


          </div>
          <div className="transacoes">
            <p className={type == "baixo" ? "textobaixo" : "texto"}>{texto}</p>
            
            <p className={type == "baixo" ? "valorBaixo" : "valor"}> {type == "baixo" ? "" : "R$" } {valor}</p>
          </div>
            {type == "baixo" ?  <h1 className="saidaBaixo"> {iconpreco} {mudar} </h1> : ""}
             
        </div>
        
    )         
}
export default Card