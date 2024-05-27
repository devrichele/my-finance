function Card({texto, valor}) {
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