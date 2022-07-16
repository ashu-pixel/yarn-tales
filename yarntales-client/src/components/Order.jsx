import React from 'react'
import OrderItem from './OrderItem'
import styled from 'styled-components'

const Container = styled.div`
 
padding : 10px ;  
margin-top : 15px ; 
margin-bottom : 15px ;
`;
const Wrapper = styled.div` 
margin-top : 15px ; 
margin-bottom : 15px ;
`;

const Stats = styled.div`
display : flex ; 
justify-content : space-between
` ;

const Headings = styled.span`
font-size : 1.3em ; 
font-weight : bold ;  
color : #af00ff
` ;

const Items = styled.div` 
display : flex ; 
flex-direction : row ; 
flex-wrap: wrap;
justify-content : space-around
` ;
const OrderDetail = styled.div`
font-size : 1.2em;
` ;

const Hr = styled.hr`
border: 0;
height: 1px;
background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
` ; 

export default function Order({order}) {
    return (
        <Container>
             
            <Wrapper>

                <Stats>
                    <OrderDetail><Headings>ORDER ID : </Headings> {order._id}</OrderDetail>
                    <OrderDetail><Headings>Total : </Headings> Rs. {order.amount}</OrderDetail>
                    <OrderDetail><Headings>Ordered on : </Headings> {order.createdAt.slice(0, 10)}</OrderDetail>
                    <OrderDetail><Headings>Status : </Headings> {order.status}</OrderDetail>
                </Stats>

                <Items>
                     
                    

                    {order.products.map((item) => <OrderItem prod = {item} key={item.productId}></OrderItem> )}

                </Items>
            </Wrapper>
            <Hr />
        </Container>
    )
}
