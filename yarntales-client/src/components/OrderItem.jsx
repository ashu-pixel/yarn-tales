import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styled from "styled-components";
import { publicRequest } from "../requestMethods";

const Container = styled.div` 
width : 15% ;    
margin : 5px ; 
 
` ;

const Card = styled.div`
 
display : flex ; 
 width : 100% ; 
  height : 90% 
` ;

const Image = styled.img`
  width: 50%;
  height: auto;
` ;

const Info = styled.div`
  display : flex ; 
  flex-direction : column ; 
  justify-content : center ; 
  margin : 10px
` ;

const Deatil = styled.div`
   
  font-size : 1.2em 
` ;


export default function OrderItem({ prod }) {


  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" +  prod.productId);
        setProduct(res.data);
      } catch { }
    };
    getProduct();
  }, [prod]);


  return (
    <Container>
      <Card>
        <Image src={product.img }></Image>
        <Info>
          <Deatil><b>Quantity</b>  <br /> {prod.quantity}</Deatil>
          <Deatil><b>Price</b>  <br /> Rs. {product.price}</Deatil>
        </Info>
      </Card>
    </Container>
  )
}
