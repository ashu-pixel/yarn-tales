import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { removeProduct } from "../redux/cartRedux";
 

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Message = styled.h1`
  font-weight: 500;
  text-align: center;
  font-size : 45px
`;


const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-size : 20px
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
    
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px; 
  width: ${(props) => props.type === "qrCode" && "100px"};
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: auto;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" || "payment" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
  color: ${(props) => props.type === "payment" && "red"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Payment = styled.div``;


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [paid, setPaid] = useState(false)
  const [address, setaddress] = useState("")
  const [errorMessage, setErrorMessage] = useState('');
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(state=>state.user)
   
  function handleConfirm() {
    
    setPaid(prev => !prev)
  }
  const handleAddress = (event) => {
    setaddress(event.target.value);
    if(address !== "") setErrorMessage('');
  };

  const routeChange = () => {

    if (address !== "") navigate("/success", { state: { cart, address } });
    else setErrorMessage('Please fill up your address');
  }

  function handleRemove  (product , e , sign)   {
    
    e.preventDefault()
     
    dispatch(
      removeProduct({ ...product , sign })
    );
  };


  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>

          <TopTexts>
            <TopText>Your shopping bag has {cart.products.length || 0} items</TopText>

          </TopTexts>

        </Top>
        <Bottom>
          <Info>
            {cart.products.length > 0 && cart.products.map((product) => (
              <Product key={product._id}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> We will get back in touch with you to find perfect measuremeants
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add onClick={(e) =>  handleRemove(product , e , 1)} style={{cursor: "pointer"}}/>
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove  onClick={(e) =>  handleRemove(product , e , -1)} style={{cursor: "pointer"}}/>
                  </ProductAmountContainer>
                  <ProductPrice>
                    Rs. {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
                <Hr />
              </Product>
            )) || <Title>Oops! Nothing to yarn.<TopButton><Link to="/">CONTINUE SHOPPING</Link></TopButton></Title>}


          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Rs {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>Rs 400</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>Rs -400</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>Rs. {cart.total}</SummaryItemPrice>
            </SummaryItem>

            {cart.products.length > 0 && user.currentUser&& <Payment>

              <SummaryItem>
                <SummaryItemText>Your Shipping Address</SummaryItemText>
                <textarea cols="23" rows="3" style={{ resize: "none" }} onChange={handleAddress}
                  placeholder="Please enter valid address with pincode" required></textarea>
              </SummaryItem>

              <SummaryItem type="payment">
                <SummaryItemText >
                  Please pay Rs.{cart.total} to below UPI ID to confirm your order.
                  <br />
                  Any incorrect amount or wrong address will lead to cancelling of order and money will be transfered back
                </SummaryItemText>
              </SummaryItem>


              <SummaryItem>
                <SummaryItemText>UPI ID</SummaryItemText>
                <SummaryItemPrice>ashutoshgupta1704@okaxis</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>OR CODE</SummaryItemText>
                <SummaryItemPrice><Image src="https://i.ibb.co/BC9fmtk/bhim.png" type="qrCode" /> </SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText>I, here by confirm that I've paid Rs.{cart.total} and understand the consequences of wrong payment</SummaryItemText>
                <SummaryItemPrice><input type="checkbox" onClick={() => handleConfirm()} /></SummaryItemPrice>
              </SummaryItem>

              {paid && <Button onClick={routeChange}>Please click to confirm your order</Button>}
              {errorMessage && (
                <p className="error"> {errorMessage} </p>
              )}
            </Payment>
            }

            {
              !user.currentUser && 
              <SummaryItem type="total">
                <SummaryItemText>Login to place your order</SummaryItemText>
                <SummaryItemPrice><Link to="/login">Login</Link></SummaryItemPrice>
              </SummaryItem>
            }


          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;