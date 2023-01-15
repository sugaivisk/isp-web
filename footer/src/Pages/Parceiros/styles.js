import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    background-color: #FFFFFF;
    margin: 0 auto;
    width: 100%;
    min-height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 1200px) {
        flex-wrap: wrap;
    }
`

export const TitleOrange = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
    font-size: 28px;
    margin-top: 20px;
    color: #FE6C05;

    @media (min-width: 992px) {
        font-size: 36px;
    }

    @media (min-width: 1200px) {
        font-size: 42px;
    }
`

export const Carousel = styled(motion.div)`
    margin: 40px auto;
    width: 100%;
    max-width: 340px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;

    cursor: grab;
    overflow: hidden;

    @media (min-width: 768px) {
        margin-top: 60px;
        max-width: 680px;
    }

    @media (min-width: 992px) {
        max-width: 800px;
    }

    @media (min-width: 1200px) {
        max-width: 1000px;
    }
`

export const Inner = styled(motion.div)`
    display: flex;

    @media (min-width: 1200px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const Item = styled(motion.div)`
    min-height: 130px;
    min-width: 130px;
    padding: 10px;

    @media (min-width: 1200px) {
        min-width: 160px;
    }

    img {
        width: 100%;
        height: 90%;
        pointer-events: none;
    }
`