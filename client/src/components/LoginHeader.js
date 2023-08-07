import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function LoginHeader (props) {

    const [cookies, setCookie, removeCookie] = useCookies(["userID"]);
    const navigate = useNavigate();
    
    function handleClick () {
        removeCookie("userID");
        navigate("/login");
    }

    return (
        <div className="login-header">
            <button className="btn btn-lg">Signed in as {props.username}</button>
            <button className="btn btn-lg" onClick={handleClick}>Sign Out</button>
        </div>
    );
}