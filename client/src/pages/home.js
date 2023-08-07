import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Navbar/>            
            <div className="home">
                <div className="first-home">
                    <h1 className="home-heading">Taskify</h1>
                    <h4>Manage your tasks efficiently and stay on top of your goals <br/> with our powerful Todo List app</h4>
                    <Link to="/register">
                        <button className="btn btn-primary btn-lg">Sign up</button>
                    </Link>
                    <Link to="/login">
                        <button className="btn btn-primary btn-lg">Log in</button>
                    </Link>
                </div>
                <div className="second-home">
                    <img src="/corporate-bg.png" alt="Background" />
                </div>
            </div>
            <Footer/>

        </>
    );
} 