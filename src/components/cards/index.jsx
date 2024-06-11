
import "./styles.css"
function Card({texto, valor, type}) {

    // if (titulo == "boa noite") {
    //   return <h1> estudar </h1>
    // }else {
    //   return <p> dormir </p>
    // }

    // type == "card" ? "cardBaixo" : "card";

    return (
      
        <div className={type == "baixo" ? "cardBaixo" : "card"}>
          <div className="container-card-icon">
          </div>
          <div className="transacoes">
            <p className={type == "baixo" ? "textobaixo" : "texto"}>{texto}</p>
            <p className={type == "baixo" ? "valorBaixo" : "valor"}> {type == "baixo" ? "" : "R$" } {valor}</p>
          </div>
            {type == "baixo" ?  <h1> -R$ 200,00</h1> : ""}
        </div>
        
    )         
}
export default Card