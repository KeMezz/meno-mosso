import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaPlay, FaStop } from "react-icons/fa";

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;

const Dots = styled.section`
  display: flex;
  gap: 32px;
`;

const Dot = styled.div`
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 50%;
  border: solid 5px #000;
  &.active {
    background-color: #111;
  }
`;

const Control = styled.section``;

const Play = styled.button`
  background-color: transparent;
  border: none;
  font-size: 50px;
  cursor: pointer;
`;

function App() {
  const [tempo, setTempo] = useState([0, 0, 0, 0]);
  const [timer, setTimer] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) {
      return;
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
      setTempo(() => {
        if (timer === 3) setTimer(0);
        let tempoCopy = [0, 0, 0, 0];
        tempoCopy[timer] = 1;
        return tempoCopy;
      });
      clearInterval(interval);
    }, 500);
  }, [tempo, isPlaying]);

  return (
    <Container>
      <Dots>
        {tempo.map((item, index) => (
          <Dot key={index} className={item === 1 ? "active" : undefined} />
        ))}
      </Dots>
      <Control>
        <Play
          onClick={() => {
            setIsPlaying((prev) => !prev);
          }}
        >
          {isPlaying ? <FaStop /> : <FaPlay />}
        </Play>
      </Control>
    </Container>
  );
}

export default App;
