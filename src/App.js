
import Home from './pages/home/index';
import styled from 'styled-components'


function App() {
  return (
    <Container className="App">
      <Home />
    </Container>
  );
}

export default App;

const Container = styled.div`
font-family: 'poppins';
`