import React from 'react';
import { Social } from '../../Components/Social';
import { Button } from '../../Components/Button';
import { LocContainer } from '../../Components/Localization';
import { Input, TextArea } from '../../Components/Input';
import { Container, FooterText, Text, Title, ContainerGrid, ContainerGrid1, ContainerGrid2} from './styles'

const Footer = () => {
    return(
        <>
            <Container>
                <Title>Contato</Title>
                <ContainerGrid>
                    <ContainerGrid1>
                        <Text>Fale com a Gente</Text>
                        <Input type="Nome:" />
                        <Input type="E-mail:" />
                        <TextArea type="Mensagem:" />
                        <Button title="Enviar" type="submit" />
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