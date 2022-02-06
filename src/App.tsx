import { Account } from "./components/Account";
import { CurrencyDisplay } from "./components/CurrencyDisplay";
import { Header } from "./components/Header";
import { Container, Wrapper } from "./global";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Account />
          <CurrencyDisplay />
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
