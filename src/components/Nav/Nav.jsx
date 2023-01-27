import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui/uiSlice";
import { Aside, NavIcon } from "./Nav.css";
import Flex from "../UI/Flex/Flex.css";
import { RiHomeLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { IoNewspaperOutline } from "react-icons/io5"

export default function Nav() {
  const dispatch = useDispatch();

  const activeNav = useSelector((state) => state.ui.activeNav);
  return (
    <Aside>
      <nav>
        <Flex column jcCenter>
          <NavIcon
            as={NavLink}
            to={"/"}
            onClick={() => dispatch(uiActions.changeActiveNav("HOME"))}
            active={activeNav === "HOME" ? +true : +false}
          >
            <RiHomeLine />
          </NavIcon>
          <NavIcon
            as={NavLink}
            to={"/profile"}
            onClick={() => dispatch(uiActions.changeActiveNav("PROFILE"))}
            active={activeNav === "PROFILE" ? +true : +false}
          >
            <FiUser />
          </NavIcon>
          <NavIcon
            as={NavLink}
            to={"/about"}
            onClick={() => dispatch(uiActions.changeActiveNav("ABOUT"))}
            active={activeNav === "ABOUT" ? +true : +false}
          >
            <IoNewspaperOutline />
          </NavIcon>
        </Flex>
      </nav>
    </Aside>
  );
}
