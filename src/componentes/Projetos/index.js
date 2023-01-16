import './projetos.css'
import './navigation.css'

import projeto1 from '../../imagens/projeto1-0.png'
import projeto2 from '../../imagens/projeto2.png'

import { useState } from 'react'
import Modal from '../Modal'

// importa Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// importa Swiper styles
import "swiper/css"
import "swiper/css/navigation"

// importa required modules
import { Navigation } from "swiper"

export default function Projetos() {

    const [modalClass, setModalClass] = useState("");

    function mostrarModal() {
        setModalClass("show")
    }

    function esconderModal() {
        setModalClass("")
    }

    return (
        <section className='carrosel'>            
            <h2 className='carrosel-titulo'>Projetos</h2>

            {/* Modal */}
            <div className='modal-container'>
                <Modal className={modalClass} funcaoEsconder={esconderModal} />
            </div>
            

            {/* Tela grande e Tablet */}
            <div className='projetos-tela'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div className='projeto' onClick={mostrarModal}>
                            <img src={projeto1} alt='projeto1-Construindo o futuro' className='projeto-img'/>
                            <div>
                                <h3>Construindo o futuro</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor. Ut eget nulla vel lorem convallis semper et eu ante.</p>
                                <button>DOE AGORA</button>  
                            </div>
                        </div>      
                        <div className='projeto' onClick={mostrarModal}>
                            <img src={projeto2} alt='projeto2-Conecta geração jovem' className='projeto-img'/>
                            <div>
                                <h3>Conecta geração jovem</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor. Ut eget nulla vel lorem convallis semper et eu ante.</p>
                                <button>DOE AGORA</button>  
                            </div>
                        </div>                                                            
                    </SwiperSlide>                
                    <SwiperSlide>
                        <div className='projeto' onClick={mostrarModal}>
                            <img src={projeto1} alt='projeto1-Construindo o futuro' className='projeto-img'/>
                            <div>
                                <h3>Construindo o futuro</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor. Ut eget nulla vel lorem convallis semper et eu ante.</p>
                                <button>DOE AGORA</button>  
                            </div>
                        </div>      
                        <div className='projeto' onClick={mostrarModal}>
                            <img src={projeto2} alt='projeto2-Conecta geração jovem' className='projeto-img'/>
                            <div>
                                <h3>Conecta geração jovem</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor. Ut eget nulla vel lorem convallis semper et eu ante.</p>
                                <button>DOE AGORA</button>  
                            </div>
                        </div>   
                    </SwiperSlide>            
                </Swiper>
            </div>
            

            {/* Celular */}
            <div className='projetos-celular'>               
                <div className='projeto' onClick={mostrarModal}>
                    <img src={projeto1} alt='projeto1-Construindo o futuro' className='projeto-img'/>
                    <div>
                        <h3>Construindo o futuro</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor. Ut eget nulla vel lorem convallis semper et eu ante.</p>
                        <button>DOE AGORA</button>  
                    </div>
                </div>      
                <div className='projeto' onClick={mostrarModal}>
                    <img src={projeto2} alt='projeto2-Conecta geração jovem' className='projeto-img'/>
                    <div>
                        <h3>Conecta geração jovem</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor. Ut eget nulla vel lorem convallis semper et eu ante.</p>
                        <button>DOE AGORA</button>  
                    </div>
                </div>        
                <div className='projeto' onClick={mostrarModal}>
                    <img src={projeto1} alt='projeto1-Construindo o futuro' className='projeto-img'/>
                    <div>
                        <h3>Construindo o futuro</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor. Ut eget nulla vel lorem convallis semper et eu ante.</p>
                        <button>DOE AGORA</button>  
                    </div>
                </div>      
                <div className='projeto' onClick={mostrarModal}>
                    <img src={projeto2} alt='projeto2-Conecta geração jovem' className='projeto-img'/>
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