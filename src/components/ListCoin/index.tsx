import { Balance, Container, Logo } from './style'
import { IoIosArrowForward } from 'react-icons/io'
interface CoinProp {
    data: {
        logoCurrency: string,
        nameCurrency: string,
        balance: number
    }
}

export const ListCoin = ({ data }: CoinProp) => {
    return (
        <Container>
            <div>
               <Logo src={data.logoCurrency}/>
               <Balance>{`${data.balance} ${data.nameCurrency}`}</Balance> 
            </div>
            <IoIosArrowForward />
        </Container>
    )
}