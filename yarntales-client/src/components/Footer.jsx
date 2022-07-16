import {

  Instagram,
  MailOutline,
  Payment,
  Email,
  Room,

} from "@material-ui/icons";
 
import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  text-align : center ; 
  ${mobile({ flexDirection: "column" })}
`;
 
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
 `;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

 
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>YARN TALES.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, itaque cum?
          Reiciendis nostrum alias atque cumque quasi ducimus expedita itaque.
          Commodi nobis qui doloribus omnis in rem, veniam enim voluptatem.
        </Desc>
        <SocialContainer>

          <SocialIcon color="E4405F">
            <a href="https://www.instagram.com/__yarntales__/"><Instagram /></a>
             
          </SocialIcon>

          <SocialIcon color="E60023">
            <Email />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Nashik, MH, India
        </ContactItem>

        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> yarntales@gmail.com 
        </ContactItem>
        <ContactItem>
        <Payment  style={{ marginRight: "10px" }}  /> We accept only prepaid orders
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;