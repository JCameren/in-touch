import SignUpForm from "../components/SignUpForm/SignUpForm";
import Seo from "../components/Seo/Seo";
import Spacer from "../components/UI/Spacer/Spacer.css";
import Container from "../components/UI/Container/Container.css";
import { ColorText } from "../components/UI/Typography/Typography.css";

export default function SignUpPage() {
  return (
    <>
      <Seo
        title="Register"
        description="Sign up for a new account here or return to the home screen if you already have an account"
      />
      <Spacer medium />
      <Container xs>
        <ColorText>Sign Up</ColorText>
      </Container>
      <SignUpForm />
    </>
  );
}
