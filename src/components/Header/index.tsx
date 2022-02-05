import { Container, ContainerHeader, FillBackgroundHeader, Info } from "./style";
import { ReactComponent as MetaMaskLogo } from '../../svg/metalogo.svg'
import { DropBox } from "../DropBox";
import { Profile } from "../Profile";

export function Header() {
    return (
        <Container>
            <ContainerHeader>
                <MetaMaskLogo />
                <Info>
                    <DropBox />
                    <Profile />
                </Info>
            </ContainerHeader>
            <FillBackgroundHeader />
        </Container>
    )
}
