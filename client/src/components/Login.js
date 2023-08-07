import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie"; 



export default function Login() {

    const navigate = useNavigate();
    const [cookie, setCookie] = useCookies(["userID"]);

    const [loginData, setLoginData] = useState({
      email: "",
      password: ""  
    });

    const [errorObj, setErrorObj] = useState({});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loginError, setLoginError] = useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = useState("");


    function handleChange(event) {
        setLoginData(function(prevValue) {
            return {
                ...prevValue,
                [event.target.name]: event.target.value
            }
        })
    }

    function validateForm() {

        const tempErrObj = {};
        
        if(loginData.email.trim() === "") {
            tempErrObj.email = "Email can't be emtpy";
        }

        if(loginData.password === "") {
            tempErrObj.password = "Password can't be empty";
        }

        setErrorObj(tempErrObj);

        if(Object.keys(tempErrObj).length === 0) {
            return true;
        } else {
            return false;
        }

    }

    async function handleSubmit(event) {

        event.preventDefault();
        setIsFormSubmitted(true);

        const validated = validateForm();
        if(validated) {
            try {

                const response = await axios.post("http://localhost:3001/login", loginData);

                if (response.data !== false) {
                    
                    setCookie("userID", response.data, {path:"/"});
                    navigate("/list");

                } else {
                  setLoginError(true);
                  setLoginErrorMessage("");
                }

              } catch (error) {
                console.error("Error occurred during login:", error);
                // alert("An error occurred during login. Please try again later. " + error);
                setLoginErrorMessage("Account associated with the entered email address does not exist.");
                setLoginError(false);
              }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className={`form-control ${isFormSubmitted && errorObj.email ? "is-invalid" : ""}`} name="email" id="email" value={loginData.email} onChange={handleChange} autoComplete="off"/>
                <div className="invalid-feedback">
                    {errorObj.email}
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className={`form-control ${isFormSubmitted && errorObj.password ? "is-invalid" : ""}`} name="password" id="password" value={loginData.password} onChange={handleChange}/>
                <div className="invalid-feedback">
                    {errorObj.password}
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            {loginError && <p className="login-error">Email and password combination does not match. Please try again!</p>}
            {loginErrorMessage !== "" && <p className="login-error">{loginErrorMessage}</p>}
            <p className="exists-paragraph">Not a member? Sign up <Link to="/register">here</Link>.</p>
        </form>
    );
}