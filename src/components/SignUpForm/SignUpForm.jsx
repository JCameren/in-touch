import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../../store/user/userThunks";
import Flex from "../UI/Flex/Flex.css";
import Container from "../UI/Container/Container.css";
import Button from "../UI/Button/Button.css";
import { Label } from "../UI/Typography/Typography.css";
import Spacer from "../UI/Spacer/Spacer.css";
import Input from "../UI/Input/Input.css";

export default function SignUpForm() {
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(signUpUser(formData));
  };
  return (
    <>
    <Spacer small />
      <Container xs>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Flex column>
            <Label>Name</Label>
            <Spacer extraSmall />
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Spacer small />
            <Label>Email</Label>
            <Spacer extraSmall />
            <Input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Spacer small />
            <Label>Password</Label>
            <Spacer extraSmall />
            <Input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <Spacer medium />
            <Button type="submit">Sign Up</Button>
            <Spacer small />
            <Button secondary onClick={() => navigate("/")}>Return Home</Button>
          </Flex>
        </form>
      </Container>
    </>
  );
}
