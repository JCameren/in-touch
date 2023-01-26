import { StyledHeader } from "./Header.css";
import Flex from "../../components/UI/Flex/Flex.css"
import Button from "../../components/UI/Button/Button.css"
import { ColorText } from "../UI/Typography/Typography.css";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user/userSlice";

export default function Header() {
  const dispatch = useDispatch()

  return (
    <StyledHeader>
      <Flex alCenter spaceBetween>
        <ColorText small>in touch</ColorText>
        <Button onClick={() => dispatch(userActions.logOut())}>Log Out</Button>
      </Flex>
    </StyledHeader>
  )
}
