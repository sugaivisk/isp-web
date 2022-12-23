import styled from 'styled-components'

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    Button {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        margin-top: 1.125rem;
        height: 1.5rem;
        width: 6.25rem;
        color:#FFFFFF;
        background: linear-gradient(180deg, #FE904C 0%, #FF7017 100%);
        border-radius: 3.5px;
        box-shadow: 0px 1.36px 1.36px 0px #000000 15%;

        transition: .3s ease-in-out;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }

        &:active {
            opacity: 0.6;
        }
}
`