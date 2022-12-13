import maos from '../../imagens/maos.png'
import './juntesecao.css'

export default function JunteSecao() {
    return (
        <section className='junte-secao'>
            <div className='junte-conteudo'>
                <span>JUNTE-SE A NÓS</span>
                <div className='junte-texto'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor. Ut eget nulla vel lorem convallis semper et eu ante.</p>
                    <button>DOE AGORA</button>
                </div>
                
            </div>
            <img src={maos} alt="mãos unidas" className='maos'></img>
        </section>
    )
}