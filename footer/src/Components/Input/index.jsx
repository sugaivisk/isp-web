import { InputContainer, TextField, ErrorText, LabelText } from "./styles";
import { Controller } from 'react-hook-form'

const Input = ({type, name, errorMessage, control, ...rest}) => {
    return(
        <>
            <InputContainer>
                <LabelText>{type}</LabelText>
                <Controller
                        name={name}
                        control={control}
                        render={({ field: {value, onChange} }) => (<input value={value} onChange={onChange} {...rest} />)}
                />
            </InputContainer>
            {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
        </>
    )
}

const TextArea = ({type, name, errorMessage, control, ...rest}) => {
    return (
        <>
            <TextField>
                <LabelText>{type}</LabelText>
                <Controller
                        name={name}
                        control={control}
                        render={({ field: {value, onChange} }) => (<textarea value={value} onChange={onChange} {...rest} />)}
                />
            </TextField>
            {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
        </>
    )
}

export { Input, TextArea }