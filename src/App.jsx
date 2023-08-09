import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Learn from "./components/learn";
import React,{useState,useEffect} from "react";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`;


function App() {

  const [comp, setComp] = useState(true)
  useEffect(()=>{  console.log("comp",comp);
},[comp])
  const handleComp = (value) => {
  setComp(value);
};
  return (
    comp?<Container>
      <Hero handleComp={handleComp} />
     
      <Who />
      <Works />
      <Contact />
    </Container>: <Container><Learn handleComp={handleComp} /></Container>
  );
}

export default App;
