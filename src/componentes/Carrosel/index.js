import './carrosel.css'
import projeto1 from '../../imagens/projeto1.png'
import projeto2 from '../../imagens/projeto2.png'


export default function Carrosel() {
    return (
        <section className='carrosel'>
            <h2 className='carrosel-titulo'>Projetos</h2>
            <div className='projetos'>
                <div className='projeto'>
                    <img src={projeto1} alt='projeto construindo o futuro'className='projeto-img'/>
                    <div>
                        <h3>Construindo o futuro</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor. Ut eget nulla vel lorem convallis semper et eu ante.</p>
                        <button>DOE AGORA</button>  
                    </div>
                    
                </div>
                <div className='projeto'>
                    <img src={projeto2} alt='projeto conecta geração jovem' className='projeto-img'/>
                    <div>
                        <h3>Conecta geração jovem</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor. Ut eget nulla vel lorem convallis semper et eu ante.</p>
                        <button>DOE AGORA</button>  
                    </div> 
                </div>                    
            </div>              
        </section>
    )
}