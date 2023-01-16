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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus sed orci quis facilisis. Donec pulvinar eros a risus iaculis, eget dapibus diam rutrum. Morbi feugiat turpis et elit mollis, ut maximus urna hendrerit. Aenean quis sodales felis. Quisque quam purus, sodales eget rhoncus nec, porta vel diam. Nulla ultricies, velit at convallis ornare, diam tellus iaculis metus, non accumsan est est id nisl. Pellentesque eget dui vitae erat mattis elementum. Morbi et neque nisl.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus sed orci quis facilisis. Donec pulvinar eros a risus iaculis, eget dapibus diam rutrum. Morbi feugiat turpis et elit mollis, ut maximus urna hendrerit. Aenean quis sodales felis. Quisque quam purus, sodales eget rhoncus nec, porta vel diam. Nulla ultricies, velit at convallis ornare, diam tellus iaculis metus, non accumsan est est id nisl. Pellentesque eget dui vitae erat mattis elementum. Morbi et neque nisl.</p>
            </div>

            <div className='botao-fechar' onClick={funcaoEsconder}></div>
        </div>
    )
}
