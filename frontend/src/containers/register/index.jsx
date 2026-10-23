import { StyledRegister } from "./style";
import Button from "../../components/button";
import { StyledContainer } from "../../components/main-div/style";
import Icon from "../../components/icon";
import { useState } from "react";

export default function Register () {

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");

    async function send(event) {
        event.preventDefault() 

        try {
            const response = await fetch("/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                }),
            });

            if (!response.ok) {
                throw new Error("Register failed");
            }

            setFirstName("");
            setLastName("");
            setEmail("");
        } catch (error) {
            console.error(error);
        }
    }

    return (
    <StyledRegister>
        <StyledContainer>
            <Icon />
            <form onSubmit={send}>
                <div className="form-div">
                    <label htmlFor="firstname">First name</label>
                    <input 
                    type="text" 
                    id="firstname"
                    required
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="form-div">
                    <label htmlFor="lastname">Last name</label>
                    <input 
                    type="text" 
                    id="lastname"
                    required
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="form-div">
                    <label htmlFor="email">Email</label>
                    <input 
                    type='email' 
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <Button
                type="submit"
                showArrow
                icon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="10" cy="7" r="4" />
                        <path d="M19 8v6" />
                        <path d="M22 11h-6" />
                    </svg>
                        }
                    >
                        Register
                    </Button>
                </form>
        </StyledContainer>
    </StyledRegister>)
}