import React from 'react';
import { Social } from '../../Components/Social';
import { Button } from '../../Components/Button';
import { LocContainer } from '../../Components/Localization';
import { Input, TextArea } from '../../Components/Input';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Container, FooterText, Text, TitleWhite, ContainerGrid, ContainerGrid1, ContainerGrid2} from './styles'

const schema = yup.object({
    name: yup.string().min(2, 'Nome deve ter pelo menos 2 caracteres').required('Campo obrigatório'),
    email: yup.string().email('Insira um e-mail válido').required('Campo obrigatório'),
    text: yup.string().required('Campo obrigatório'),
}).required();

const Footer = () => {

    const { control, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
      });

    const onSubmit = data => console.log(data);

    return(
        <>
            <Container>
                <TitleWhite>Contato</TitleWhite>
                <ContainerGrid>
                    <ContainerGrid1>
                        <Text>Fale com a Gente</Text>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input type="Nome:" name="name" control={control} errorMessage={errors.name?.message} />
                            <Input type="E-mail:" name="email" control={control} errorMessage={errors.email?.message} />
                            <TextArea type="Mensagem:" name="text" control={control} errorMessage={errors.text?.message} />
                            <Button title="Enviar" type="submit" />
                        </form>
                    </ContainerGrid1>
                    <ContainerGrid2>
                        <LocContainer />
                        <Social />
                    </ContainerGrid2>
                </ContainerGrid>
                <FooterText>
                        ISP-SJB © Todos direitos reservados | CNPJ: XXXXXX-XX
                </FooterText>
            </Container>
        </>
    )
}

export { Footer }