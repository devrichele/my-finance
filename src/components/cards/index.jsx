

import "./styles.css"
import { BsArrowBarDown, BsArrowBarUp } from "react-icons/bs"
import { BiDollar } from "react-icons/bi";

function Card({texto, valor, type, mudar, typetranse }) {


    return (
      
        <div className={type == "baixo" ? "cardBaixo" : "card"}
        >
          <div className="container-card-icon" >
            { texto == "Entradas" && <BsArrowBarUp />}
            { texto == "Saídas" && <BsArrowBarDown />}
            { texto == "Total" && <BiDollar />}
            {type == "baixo" && typetranse == "exit" && <BsArrowBarDown />}
            {type == "baixo" && typetranse == "entry" && <BsArrowBarUp />}


          </div>
          <div className="transacoes">
            <p className={type == "baixo" ? "textobaixo" : "texto"}>{texto}</p>
            
            <p className={type == "baixo" ? "valorBaixo" : "valor"}> {type == "baixo" ? "" : "R$" } {valor}</p>
          </div>
            {type == "baixo" ?  <h1 style={{color:typetranse == "exit" ? "red" : "green"}} className="saidaBaixo">  {typetranse == "exit" && "-"}R$ {mudar} </h1> : ""}
             
        </div>
        
    )         
}
export default Card