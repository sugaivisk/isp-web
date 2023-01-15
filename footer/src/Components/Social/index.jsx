import { SocialContainer, SocialIcons } from "./styles";

const Social = () => {
    return(
        <>
            <SocialContainer>
                <SocialIcons href="#" target="_blank">
                    <i class="fas fa-envelope"></i>
                </SocialIcons>
                <SocialIcons href="#" target="_blank">
                    <i class="fab fa-facebook-f"></i>
                </SocialIcons>
                <SocialIcons href="#" target="_blank">
                    <i class="fab fa-twitter"></i>
                </SocialIcons>
                <SocialIcons href="#" target="_blank">
                    <i class="fab fa-tiktok"></i>
                </SocialIcons>
                <SocialIcons href="#" target="_blank">
                    <i class="fab fa-instagram"></i>
                </SocialIcons>
                <SocialIcons href="#" target="_blank">
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