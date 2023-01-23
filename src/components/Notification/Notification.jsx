import StyledErrorMsg from "./Notification.css";
import Flex from '../UI/Flex/Flex.css'
import Spacer from "../UI/Spacer/Spacer.css"

export default function Notification({ message, removeNotification }) {
  return (
    <StyledErrorMsg>
      <Flex>
        <p>{message}</p>
        <Spacer extraSmall />
        <p onClick={removeNotification}>X</p>
      </Flex>
    </StyledErrorMsg>
  );
}
