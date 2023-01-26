import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logInUser } from "../../store/user/userThunks";
import Container from "../UI/Container/Container.css";
import { Label } from "../UI/Typography/Typography.css";
import Flex from "../UI/Flex/Flex.css";
import Spacer from "../UI/Spacer/Spacer.css";
import Button from "../UI/Button/Button.css"
import Input from "../UI/Input/Input.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logInUser(credentials));
  };
  return (
    <>
      <Spacer extraSmall />
      <Container xs>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <Flex column>
              <Label>Email</Label>
              <Spacer extraSmall />
              <Input
                type="text"
                name="email"
                value={credentials.email}
                onChange={handleChange}
              />
              <Spacer small />
              <Label>password</Label>
              <Spacer extraSmall />
              <Input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
              />
              <Spacer medium/>
              <Button type="submit">Login</Button>
              <Spacer small/>
              <Button secondary onClick={() => navigate("/sign-up")}>Not a member? Sign Up.</Button>
            </Flex>
          </form>
      </Container>
    </>
  );
}
