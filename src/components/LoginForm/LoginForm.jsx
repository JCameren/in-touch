import { useState } from "react";
import { useDispatch } from "react-redux";
import { logInUser } from "../../store/user/userThunks";
import Container from "../UI/Container/Container.css";
import Card from "../UI/Card/Card.css";
import Flex from "../UI/Flex/Flex.css";
import Spacer from "../UI/Spacer/Spacer.css";
import Button from "../UI/Button/Button.css"
import Input from "../UI/Input/Input.css";

export default function LoginForm() {
  const dispatch = useDispatch();
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
        <Card elevated>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <Flex column>
              <label htmlFor="">Email</label>
              <Spacer extraSmall />
              <Input
                type="text"
                name="email"
                value={credentials.email}
                onChange={handleChange}
              />
              <Spacer small />
              <label htmlFor="">password</label>
              <Spacer extraSmall />
              <Input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
              />
              <Spacer small/>
              <Button type="submit">Login</Button>
            </Flex>
          </form>
        </Card>
      </Container>
    </>
  );
}
