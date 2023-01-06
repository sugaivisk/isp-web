import styled from 'styled-components'

export const SocialContainer = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`

export const SocialIcons = styled.a`
    color: #F5F5F5;
    font-size: 2rem;
    transition: .3s ease-in-out;

    &:hover {
        transform: scale(1.3);
    }
`