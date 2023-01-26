import SignUpForm from "../components/SignUpForm/SignUpForm";
import Spacer from "../components/UI/Spacer/Spacer.css";
import Container from "../components/UI/Container/Container.css";
import { ColorText } from "../components/UI/Typography/Typography.css";

export default function SignUpPage() {
  return (
    <>
      <Spacer medium />
      <Container xs>
        <ColorText>Sign Up</ColorText>
      </Container>
      <SignUpForm />
    </>
  );
}
