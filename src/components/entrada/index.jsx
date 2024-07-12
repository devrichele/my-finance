
import "./styles.css"

export default function  EntradaCadastro ({placeholder}){
    function lidarComInupt (eventos){

        console.log(eventos)
        

    }

    return (
    <div>
        <input className="cadastroInput" placeholder={placeholder} onChange={(evento) => lidarComInupt(evento.target.value)}/>
    </div>
    
 )
}


