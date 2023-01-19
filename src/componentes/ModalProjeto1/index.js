import './modal.css'
import projeto1 from '../../imagens/projeto1-1.png'

export default function Modal (props) { 
    
    const { className, funcaoEsconder } = props

    return(
        <div className={`${className} modal`}>
            <div className='modal-header'>
                <h3 className='modal-titulo'>Projeto construindo o futuro</h3>
                <button className='modal-doacao'>DOE AGORA</button>
            </div>

            <div className='modal-imagem'>
                <img src={projeto1} alt='crinças brincando'></img>
            </div>

            <div className='modal-content'>
                <p>É a primeira etapa para colocarmos a nossa missão em prática. Os atendimentos são direcionados a crianças de 3 a 16 anos, em situação de vulnerabilidade social.</p>
                <p>Oferecemos atividades esportivas, artísticas e culturais, dentro e fora da comunidade.</p>
                <p>Além disso, proporcionamos apoio psicológico e direcionamentos jurídicos às famílias. Durante as ações, abordamos os valores da instituição e encorajamos as crianças a seguirem seus sonhos.</p>                
            </div>

            <div className='botao-fechar' onClick={funcaoEsconder}></div>
        </div>
    )
}
