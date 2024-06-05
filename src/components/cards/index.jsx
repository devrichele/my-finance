
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
            <p className="texto">{texto}</p>
            <p className="valor"> R$ {valor}</p>
          </div>
        
        </div>
        
    )         
}
export default Card