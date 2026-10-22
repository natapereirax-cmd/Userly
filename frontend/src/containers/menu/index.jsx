import { StyledMenu } from "./style"
import Icon from "../../components/icon/index"
import Button from "../../components/button/index"
import { useNavigate } from "react-router-dom"

export default function Menu () {
    const navigate = useNavigate();
    
    return (
        <StyledMenu>
            <Icon />
            <Button onClick={() => navigate('/register')}>Begin</Button>
        </StyledMenu>
    )
}