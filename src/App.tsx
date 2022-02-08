import { Account } from "./components/Account";
import { CurrencyDisplay } from "./components/CurrencyDisplay";
import { Header } from "./components/Header";
import { OptionButton } from "./components/OptionButton";
import { Container, ContainerListCoin, Wrapper } from "./global";

import coins from '../src/coins.json'
import { ListCoin } from "./components/ListCoin";
import { ImportToken } from "./components/ImportToken";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Account />
          <CurrencyDisplay />
          <OptionButton />
          <ContainerListCoin>
              { coins.map((coin, index) => <ListCoin key={index} data={coin}/>) }
          </ContainerListCoin>
          <ImportToken />
          <Footer />
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
