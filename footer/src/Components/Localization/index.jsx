import { Maps, MapText, MapContainer } from './styles'

const LocContainer = () => {
    return (
        <>
        <MapContainer>
                <Maps>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49531.6866312252!2d-43.28651584923242!3d-22.673741015383502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9972edfbe838f5%3A0x672bb060c280a52a!2sDuque%20de%20Caxias%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1670934180387!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Maps>
                <MapText>
                    Rua XXX<br />
                    Duque de Caxias / RJ<br />
                    90000-000
                </MapText>
            </MapContainer>
        </>
    )
}

export { LocContainer }