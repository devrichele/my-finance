
import "./styles.css"
function Card({texto, valor, type}) {

    // if (titulo == "boa noite") {
    //   return <h1> estudar </h1>
    // }else {
    //   return <p> dormir </p>
    // }

    type == "transacoes" ? <h1> historico </h1> : <p> dormir </p>

    return (
      
        <div className='card'>
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