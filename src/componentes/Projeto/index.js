import './projeto.css'

export default function Projeto(props) {
    return (
        <div className='projeto'>
            <img src={props.img} alt={props.alt} className='projeto-img'/>
            <div>
                <h3>{props.titulo}</h3>
                <p>{props.texto}</p>
                <button>DOE AGORA</button>  
            </div>
        </div>
    )
}