import { Account } from "./components/Account";
import { CurrencyDisplay } from "./components/CurrencyDisplay";
import { Header } from "./components/Header";
import { OptionButton } from "./components/OptionButton";
import { Container, ContainerLisCoin, Wrapper } from "./global";

import coins from '../src/coins.json'
import { ListCoin } from "./components/ListCoin";
import { ImportToken } from "./components/ImportToken";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Account />
          <CurrencyDisplay />
          <OptionButton />
          <ContainerLisCoin>
              { coins.map((coin, index) => <ListCoin key={index} data={coin}/>) }
          </ContainerLisCoin>
          <ImportToken />
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
