import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  ${mobile({ height: "20vh" })} 
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight : bold ; 
`;

const Title = styled.h1`
    color:red;
    margin-bottom: 20px;
    text-align : center ; 
    letter-spacing: 3px;
    
`;

 
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
         
      </Info>
    </Container>
  );
};

export default CategoryItem;