import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
 

const Container = styled.div``;
const Wrapper = styled.div`
display : flex ; 
align-items: center;
justify-content: center;
margin-top : 20px ; 
margin-bottom : 30px ; 
flex-direction : column
`;

const Seal = styled.img` 
height : 20em ; 
width:20em
`;

const Message = styled.div` 
 font-size : 1.2em ; 
  color : green
  
`;


const Success = () => {
  const location = useLocation();
   //   const data = location.state.stripeData;
  //   const cart = location.state.cart;
  //   const currentUser = useSelector((state) => state.user.currentUser);
  //   const [orderId, setOrderId] = useState(null);

  //   useEffect(() => {

  //     const createOrder = async () => {
  //       try {
  //         const res = await userRequest.post("/orders", {
  //           userId: currentUser._id,
  //           products: cart.products.map((item) => ({
  //             productId: item._id,
  //             quantity: item._quantity,
  //           })),
  //           amount: cart.total,
  //           address: data.billing_details.address,
  //         });
  //         setOrderId(res.data._id);
  //       } catch {}
  //     };
  //     data && createOrder();
  //   }, [cart, data, currentUser]);

  console.log(location.state)
  // console.log(location.state.address)

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Seal src="/imgs/Confirmation.png" alt="" />
        
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Success;