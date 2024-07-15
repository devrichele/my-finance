
import "./styles.css"

export default function  EntradaCadastro ({placeholder, useOnchange}){
    
    return (
    <div>
        <input className="cadastroInput" placeholder={placeholder} onChange={useOnchange}/>
    </div>
    
 )
}


