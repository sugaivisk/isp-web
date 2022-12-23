import styled from 'styled-components'

export const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    background-image: linear-gradient(180deg, #63B2BB, #E07D2594);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
`

export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
    font-size: 1.75rem;
    color: #FFFFFF;
    margin-bottom: 20px;
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