import { useEffect , useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;



const Products = () => {

  const [prods, setProds]= useState( [] );

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProds(res.data);
        // console.log(prods)
      } catch (err) {}
    };
    
    getProducts();
  }, []);



  return (
    <Container>
      {prods.map((item) => (
        <Product item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Products;