import { Account } from "./components/Account";
import { CurrencyDisplay } from "./components/CurrencyDisplay";
import { Header } from "./components/Header";
import { OptionButton } from "./components/OptionButton";
import { Container, Wrapper } from "./global";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Account />
          <CurrencyDisplay />
          <OptionButton />
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
