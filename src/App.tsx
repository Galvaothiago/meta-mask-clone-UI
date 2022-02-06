import { Account } from "./components/Account";
import { Header } from "./components/Header";
import { Container, Wrapper } from "./global";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Account />
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
