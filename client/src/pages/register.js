import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Register from "../components/Register";

export default function Registration() {
    return (
        <>
            <Navbar/>
            <div className="registration">
                <h1>Sign up today!</h1>
                <Register className="registration-form"/>
            </div>
            <Footer/>
        </>
    );
}