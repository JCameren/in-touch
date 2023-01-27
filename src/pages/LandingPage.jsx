import LoginForm from "../components/LoginForm/LoginForm";
import Seo from "../components/Seo/Seo";
import Container from "../components/UI/Container/Container.css";
import { ColorText } from "../components/UI/Typography/Typography.css";
import Spacer from "../components/UI/Spacer/Spacer.css";

export default function LandingPage() {
  return (
    <>
      <Seo title="Login" description="Log-in or sign up here!" />
      <Spacer medium />
      <Container xs>
        <ColorText>in touch</ColorText>
      </Container>
      <LoginForm />
    </>
  );
}
