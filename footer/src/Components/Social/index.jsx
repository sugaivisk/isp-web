import { SocialContainer, SocialIcons } from "./styles";

const Social = () => {
    return(
        <>
            <SocialContainer>
                <SocialIcons href="mailto:" target="_blank">
                    <i class="fas fa-envelope"></i>
                </SocialIcons>
                <SocialIcons href="https://www.facebook.com/instituicaosociedadeplural/" target="_blank">
                    <i class="fab fa-facebook-f"></i>
                </SocialIcons>
                <SocialIcons href="https://mobile.twitter.com/SociedadePlural" target="_blank">
                    <i class="fab fa-twitter"></i>
                </SocialIcons>
                <SocialIcons href="https://www.instagram.com/sociedadeplural/" target="_blank">
                    <i class="fab fa-instagram"></i>
                </SocialIcons>
                <SocialIcons href="https://www.linkedin.com/company/institui%C3%A7%C3%A3o-sociedade-plural/mycompany/" target="_blank">
                    <i class="fab fa-linkedin-in"></i>
                </SocialIcons>
                <SocialIcons href="#" target="_blank">
                    <i class="fab fa-whatsapp"></i>
                </SocialIcons>
            </SocialContainer>
        </>
    )
}

export { Social }