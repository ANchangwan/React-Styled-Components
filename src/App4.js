import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vh;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin-top: 10em;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App4() {
  return (
    <Wrapper>
      <Title>Title</Title>
    </Wrapper>
  );
}

export default App4;
