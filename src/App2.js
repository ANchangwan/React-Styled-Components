import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

function App2() {
  return (
    <Father>
      <Input />
    </Father>
  );
}

export default App2;
