import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Login from "../components/Login";

export default function UserLogin() {
    return (
        <>
            <Navbar/>
            <div className="user-login">
                <h1>Welcome back!</h1>
                <Login className="login-form"/>
            </div>
            <Footer/>
        </>
    );
}