import { useNavigate } from "react-router-dom"
import { Aside, NavIcon } from "./Nav.css"
import Flex from "../UI/Flex/Flex.css"
import { RiHomeLine } from "react-icons/ri"
import { FiUser } from "react-icons/fi"

export default function Nav() {
    const navigate = useNavigate()
    return (
        <Aside>
            <nav>
                <Flex column jcCenter>
                    <NavIcon>
                        <RiHomeLine onClick={() => navigate("/")}/>
                    </NavIcon>
                    <NavIcon>
                        <FiUser  onClick={() => navigate("/profile")}/>
                    </NavIcon>
                </Flex>
            </nav>
        </Aside>
    )
}