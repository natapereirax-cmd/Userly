import { StyledFooter } from "./style";

export default function Footer () {
    return(
        <StyledFooter>
            <div className="footer-text">
                <p>Data provided by my own API made with <span>Node.js</span></p>
                <p>Study project in <span>React<i className='bx bxs-bolt'></i></span></p>
            </div>
        </StyledFooter>
    )
}