import './projeto-carrosel.css'
import './navigation.css'

import Projeto from '../Projeto'
import projeto1 from '../../imagens/projeto1.png'
import projeto2 from '../../imagens/projeto2.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

// import required modules
import { Navigation } from "swiper"

export default function Carrosel() {
    return (
        <section className='carrosel'>
            <h2 className='carrosel-titulo'>Projetos</h2>

            {/* Tela grande e Tablet */}
            <div className='projetos-tela'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <Projeto
                            img={projeto1}
                            alt="projeto1-Construindo o futuro"
                            titulo="Construindo o futuro"
                            texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor. Ut eget nulla vel lorem convallis semper et eu ante."
                        />                
                        <Projeto
                            img={projeto2}
                            alt="projeto2-Conecta geração jovem"
                            titulo="Conecta geração jovem"
                            texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor. Ut eget nulla vel lorem convallis semper et eu ante."
                        />
                    </SwiperSlide>                
                    <SwiperSlide>
                        <Projeto
                            img={projeto1}
                            alt="projeto1-Construindo o futuro"
                            titulo="Construindo o futuro"
                            texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor. Ut eget nulla vel lorem convallis semper et eu ante."
                        />                
                        <Projeto
                            img={projeto2}
                            alt="projeto2-Conecta geração jovem"
                            titulo="Conecta geração jovem"
                            texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor. Ut eget nulla vel lorem convallis semper et eu ante."
                        />
                    </SwiperSlide>            
                </Swiper>
            </div>
            

            {/* Celular */}
            <div className='projetos-celular'>               
                <Projeto
                    img={projeto1}
                    alt="projeto1-Construindo o futuro"
                    titulo="Construindo o futuro"
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor. Ut eget nulla vel lorem convallis semper et eu ante."
                />                
                <Projeto
                    img={projeto2}
                    alt="projeto2-Conecta geração jovem"
                    titulo="Conecta geração jovem"
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor. Ut eget nulla vel lorem convallis semper et eu ante."
                />                    
                <Projeto
                    img={projeto1}
                    alt="projeto1-Construindo o futuro"
                    titulo="Construindo o futuro"
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor. Ut eget nulla vel lorem convallis semper et eu ante."
                />                
                <Projeto
                    img={projeto2}
                    alt="projeto2-Conecta geração jovem"
                    titulo="Conecta geração jovem"
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor. Ut eget nulla vel lorem convallis semper et eu ante."
                />
            </div>  

        </section>
    )
}