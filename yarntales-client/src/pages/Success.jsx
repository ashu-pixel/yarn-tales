import { CheckCircleOutline   } from "@material-ui/icons"; 
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
 
 
const Container = styled.div``;
const Wrapper = styled.div`
display : flex ; 
align-items: center;
justify-content: center;
margin-top : 20px ; 
margin-bottom : 30px  ; 
${mobile({ flexDirection: "column" })}
`;

const Seal = styled.img` 
height : 20em ; 
width:20em
`;

const Message = styled.div` 
 font-size : 1.4em ; 
 color: ${(props) => props.type === "success" && "darkgreen"};
 background-color: ${(props) => props.type === "success" && "lightgreen"};
  padding : 20px  ; 
  border-radius : 10px ;  
  text-align : center
`;


const Success = () => {
   
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
      
        <Seal src="/imgs/Confirmation.png" alt="" />
        <div style={{ margin: "10px" }}>
          <Message type="success"> <CheckCircleOutline></CheckCircleOutline> Order Placed Successfully</Message>
           
          <Message> We will shorty get back to you to find perfect fit after confirming payment !</Message>
           
        </div>
      </Wrapper>
     
      <Footer />
    </Container>
  );
};

export default Success;