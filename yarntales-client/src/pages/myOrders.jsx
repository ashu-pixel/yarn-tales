import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Order from "../components/Order";
import { userRequest } from "../requestMethods";
 

const Container = styled.div``;
const Wrapper = styled.div`
padding : 20px
`;
const Message = styled.div`
font-size : 5em ; 
text-align : center 
`;

const MyOrders = () => {

    const [orders, setOrders] = useState([])
    const { currentUser } = useSelector(state => state.user)
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await userRequest.get("/orders/find/" + currentUser._id);
                setOrders(res.data);
            } catch { }
        };
        getProduct();
    }, [currentUser]);




    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                {orders.map((item) => (
                    <Order order={item} key={item._id}></Order>
                ))}
                
                { !orders.length &&  
                <Message>No orders placed ! </Message>
                }

            </Wrapper>

            <Footer />
        </Container>
    );
};

export default MyOrders;