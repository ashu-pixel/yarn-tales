import { useEffect, useState  } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link   } from "react-router-dom";
 
import { register } from "../redux/apiCalls";
import { useDispatch , useSelector} from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/Z284x8b/Green-Illustrative-Would-you-rather-Brain-Break-Activity-Presentation.png")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  margin-right : 2% ; 
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
   
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;


const Empty = styled.div`
  
  font-size: 20px;
  margin: 20px 0px;
`;



const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {

  const [name, setName] = useState("")
  const [last, setLast] = useState("")
  const [username, setusername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCpassword] = useState("")
  const [isEmpty, setisEmpty] = useState(true)
  const [message, setMessge] = useState("Please fill out all details")
  const { error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    const check = () => {
      if (name !== "" && last !== "" && username !== "" && email !== "" && password !== "" && cpassword !== "") setisEmpty(false)
      else setisEmpty(true)
    };
    check();
  }, [name, last, username, email, password, cpassword]);


  function handleSubmit(e) {

    e.preventDefault();
    setisEmpty(true)
    setMessge("")
    register(dispatch, { username, password, email });
  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" onChange={(e) => setName(e.target.value.trim())} />
          <Input placeholder="last name" onChange={(e) => setLast(e.target.value.trim())} />
          <Input placeholder="username" onChange={(e) => setusername(e.target.value.trim())} />
          <Input placeholder="email" onChange={(e) => setEmail(e.target.value.trim())} />
          <Input placeholder="password" onChange={(e) => setPassword(e.target.value.trim())} />
          <Input placeholder="confirm password" onChange={(e) => setCpassword(e.target.value.trim())} />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          {!isEmpty && <Button onClick={handleSubmit}>CREATE</Button>}
          {isEmpty && <Empty> {message}</Empty>}
          {
            error &&
            <Empty>
              User already registered.
              <Button onClick={handleSubmit}><Link to="/login">Log in </Link></Button> 
              to continue
            </Empty>
          }

        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;