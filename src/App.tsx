import { useState } from "react";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16vh;
  align-items: center;
`;

const Indicator = styled.section`
  display: flex;
  gap: 30px;
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #000;
`;

const BPMText = styled.h1`
  font-size: 160px;
  font-weight: 900;
  color: #222;
`;

const Buttons = styled.section`
  font-size: 50px;
`;

function App() {
  const [bpm, setBpm] = useState(140);
  return (
    <Container>
      <Indicator>
        {[1, 2, 3, 4].map((item) => (
          <Circle key={item} />
        ))}
      </Indicator>
      <BPMText>{bpm}</BPMText>
      <Buttons>
        <FaPlay />
      </Buttons>
    </Container>
  );
}

export default App;
