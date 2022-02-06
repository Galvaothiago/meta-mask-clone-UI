import { Buttons, Container, ContainerButton, Icon } from "./style"
import { HiDownload } from 'react-icons/hi'
import { ImArrowUpRight2 } from 'react-icons/im'
import { ReactComponent as SwapIcon } from '../../svg/swapicon.svg'

export const CurrencyDisplay: React.FC = () => {
    return (
        <Container>
            <img src="/assets/logo-bnb.png" alt="type currency" />
            <span>2.048 BNB</span>
            <Buttons>
                <ContainerButton>
                    <Icon><HiDownload /></Icon>
                    <p>Buy</p>
                </ContainerButton>
                <ContainerButton>
                    <Icon><ImArrowUpRight2 /></Icon>
                    <p>Send</p>
                </ContainerButton>
                <ContainerButton>
                    <Icon><SwapIcon /></Icon>
                    <p>Swap</p>
                </ContainerButton>
            </Buttons>
        </Container>
    )
}