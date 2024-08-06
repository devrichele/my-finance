import "./styles.css"
import { LuArrowDownCircle, LuArrowUpCircle } from "react-icons/lu";


export default function BotaoTransacoes ({textoBotao, typeIcon, onClick}) {

    
return(
    <div>
        <button 
            onClick={onClick}
            className="botao-cadastro"
            style={{
            backgroundColor: typeIcon == "up" ? "#33CC95" : "transparent"
            }}

        > 
            {typeIcon == "up"  ? <LuArrowUpCircle style={{color: "green"}}/>: < LuArrowDownCircle style={{color:"red"}}/>}
            {textoBotao} 

        </button> 
        
    </div>
)

}
