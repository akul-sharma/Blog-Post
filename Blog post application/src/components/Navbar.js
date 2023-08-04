import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Navbar(){
    return (
        <div>
            <nav className="navbar navbar-light bg-dark d-flex justify-content-between" style={{height:"60px"}}>
                <div></div>
                <div className="navbar-brand mb-0 " style={{color:"white"}}>Blogging</div>
                <div></div>
            </nav>
        </div>
    )
}

export default Navbar;