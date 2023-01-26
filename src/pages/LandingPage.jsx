import LoginForm from "../components/LoginForm/LoginForm";
import Container from "../components/UI/Container/Container.css";
import { ColorText } from "../components/UI/Typography/Typography.css";
import Spacer from "../components/UI/Spacer/Spacer.css";

export default function LandingPage() {
  return (
    <>
    <Spacer  medium/>
      <Container xs>
        <ColorText>in touch</ColorText>
      </Container>
      <LoginForm />
    </>
  );
}
