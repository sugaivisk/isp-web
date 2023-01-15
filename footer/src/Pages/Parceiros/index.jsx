import { useState, useEffect, useRef } from 'react';
import { Container, Carousel, Inner, Item, TitleOrange } from './styles';

import DoceBaccana from '../../Assets/image8.png'
import CristinaImplantista from '../../Assets/image9.png'
import FbTalentos from '../../Assets/image10.png'
import TabernaculoEducacional from '../../Assets/image11.png'
import Imagem12 from '../../Assets/image12.png'
import Kledirauto from '../../Assets/image13.png'
import ReageInforma from '../../Assets/image14.png'
import DefendoriaPublica from '../../Assets/image15.png'

const images = [DoceBaccana, CristinaImplantista, FbTalentos, TabernaculoEducacional, Imagem12, Kledirauto, ReageInforma, DefendoriaPublica]


const Parceiros = () => {
    const carousel = useRef();

    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    return (
        <>
            <Container>
                <TitleOrange>Parceiros</TitleOrange>
                <Carousel ref={carousel} whileTap={{ cursor: "grabbing" }}>
                    <Inner
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x:100 }}
                    animate={{ x:0 }}
                    transition={{ duration:0.8 }}
                    >
                        {images.map(image => (
                            <Item key={image}>
                                <img src={image} alt="Parceiros da ISP" />
                            </Item>
                        ))}
                    </Inner>
                </Carousel>
            </Container>
        </>
    )
}

export { Parceiros }