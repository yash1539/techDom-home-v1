

import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;



const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Flex = styled.div`
display:flex
flex-direction:column`


const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;
const Desc2 = styled.p`
  font-size: 24px;
  color: #787276;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;
const P = styled.p`
padding:2px
  font-size: 24px;
  color: #ffffff;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;


const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;






const Learn = ({handleComp}) => {


  return (
    <Section>
      <Container>


        <Left>
        <Button onClick={()=>handleComp(true)}>Close</Button>

         
          
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What we Do</Subtitle>
          </WhatWeDo>
          <P>

<Desc2>Why Choose TechDom Solutions?</Desc2>
<br/>

<P>Comprehensive Skillset: Our team comprises proficient developers adept in a wide array of technologies, ensuring that every facet of your project is expertly handled.</P>
<br/>
<P>Customized Approach: We understand that no two businesses are the same. Our solutions are tailored to your specific goals, ensuring optimum outcomes.</P>
<br/>

<P>Agile Methodology: We embrace agility in our development process, allowing us to adapt to changing requirements and deliver results promptly.</P>
<br/>

<P>Innovative Mindset: We constantly explore new technologies, staying ahead of the curve and providing you with the latest solutions.</P>
<br/>

<P>End-to-End Services: From conceptualization to deployment and beyond, we offer complete support throughout the development lifecycle.</P>
<br/>

<P>Our Service Portfolio:</P>
<br/>


<P>Web Application Development: Leveraging React, Angular, Vue, and Next, we create engaging, responsive, and user-centric web applications.</P>
<br/>

<P>Backend Development: Our expertise in Node, Java, and Koa ensures robust and scalable backend solutions.</P>
<br/>

<P>Blockchain Integration: We unlock the potential of blockchain technology for your business needs, providing transparency and security.</P>
<br/>

<P>Database Management: Whether it's MongoDB or Firebase, we manage and optimize your data storage solutions.</P>
<br/>

<P>Moralis Integration: Harnessing the power of Moralis, we create feature-rich and decentralized applications.</P>
<br/>

<P>IT Consultation: Our experts provide strategic guidance, helping you make informed decisions to drive digital transformation.</P>

<P>In the ever-evolving landscape of IT services, TechDom Solutions stands as your steadfast partner, guiding you towards digital excellence. Let us embark on a journey of innovation together, revolutionizing the way you experience technology..</P>
</P>
          <Flex>

         
          
        </Flex>
        </Left>
       
      </Container>
    </Section>
  );
};

export default Learn;
