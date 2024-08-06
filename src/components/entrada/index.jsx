
import "./styles.css"

export default function  EntradaCadastro ({placeholder, useOnchange, value}){
    
    return (
    <div>
        <input className="cadastroInput" placeholder={placeholder} value={value} onChange={useOnchange}/>
    </div>
    
 )
}


