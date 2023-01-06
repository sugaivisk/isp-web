import styled from 'styled-components'

export const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    background-image: linear-gradient(180deg, #63B2BB, #E07D2594);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    min-height: 600px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;

    @media only screen and (min-width: 768px) {
        min-height: 400px;
}
`

export const ContainerGrid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 40px;
}
`

export const ContainerGrid1 = styled.div`
    @media only screen and (min-width: 768px) {
        grid-column-start: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
}
`

export const ContainerGrid2 = styled.div`
    @media only screen and (min-width: 768px) {
        grid-column-start: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
}
`

export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
    font-size: 1.75rem;
    color: #FFFFFF;
    margin-bottom: 15px;
`

export const Text = styled.p`
    font-size: 0.9rem;
    text-align: center;
    margin-bottom: .5rem;
`

export const FooterText = styled.p`
    font-size: 0.5rem;
    position: absolute;
    bottom: 12px;
`