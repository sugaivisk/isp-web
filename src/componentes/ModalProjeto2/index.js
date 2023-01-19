import './modal.css'
import projeto2 from '../../imagens/projeto2-1.png'

export default function Modal (props) { 
    
    const { className, funcaoEsconder } = props

    return(
        <div className={`${className} modal`}>
            <div className='modal-header'>
                <h3 className='modal-titulo'>Programa conecta geração jovem</h3>
                <button className='modal-doacao'>DOE AGORA</button>
            </div>

            <div className='modal-imagem'>
                <img src={projeto2} alt='crinças brincando'></img>
            </div>

            <div className='modal-content'>
                <p>Dando continuidade ao projeto Construindo o Futuro, neste focamos em preparar adolescentes e jovens, entre 16 e 24 anos, para o mercado de trabalho.</p>
                <p>Buscamos meios de implementar espaços de convivência para a participação, formação e desenvolvimento da cidadania, bem como o estímulo ao protagonismo e autonomia dos jovens.</p>
                <p>Oferecemos aulas de inglês, cursos de liderança, tecnologia e inovação. </p>
                <p> Os participantes ainda têm a vivência do mercado de trabalho com workshops sobre elaboração de currículos, entrevistas de emprego e educação financeira.</p>
                <p>Também há debates sobre temas relevantes na formação do cidadão para que ele participe de maneira efetiva e seja capaz de transformar o meio ao qual pertence. </p>
            </div>

            <div className='botao-fechar' onClick={funcaoEsconder}></div>
        </div>
    )
}
