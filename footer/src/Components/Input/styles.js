import styled from 'styled-components'

export const InputContainer = styled.div`
    width: 13rem;
    height: 1.5rem;
    margin-bottom: 15px;

    input {
        width: 12.8rem;
        height: 1.5rem;
        border-radius: 3px;
        box-shadow: 0px 1.16px 1.16px 0px #525252 25%;
    }
`

export const TextField = styled.div`
    width: 12.8rem;
    height: 3rem;
    margin-bottom: 15px;

    textarea {
        width: 12.8rem;
        height: 3rem;
        resize: none;
        border-radius: 3px;
    }
`

export const LabelText = styled.label`
    font-size: 0.7rem;
`

export const ErrorText = styled.p`
    color: #DC143C;
    font-size:12px;
    margin-top:8px;
    margin-left:10px;
`