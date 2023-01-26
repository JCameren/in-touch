import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../store/user/userSlice";

export default function Homepage() {
  const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    const { name } = user
  return (
    <>
      <h1>Logged in as { name }</h1>
    </>
  );
}
