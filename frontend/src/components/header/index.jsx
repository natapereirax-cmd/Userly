import { StyledHeader } from "./style";
import {NavLink} from "react-router-dom";

export default function Header () {
    return (
    <StyledHeader>
        <nav>
            <NavLink to="/" className={({ isActive }) => (isActive ? "is-active" : undefined)} end>Menu</NavLink>
            <NavLink to="/register" className={({ isActive }) => (isActive ? "is-active" : undefined)}>Register</NavLink>
            <NavLink to="/list" className={({ isActive }) => (isActive ? "is-active" : undefined)}>Users list</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "is-active" : undefined)}>About us</NavLink>
        </nav>
    </StyledHeader>
    )
}