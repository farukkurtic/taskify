import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Register() {

    const navigate = useNavigate();

    const [registrationData, setRegistrationData] = useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: ""
    });

    const [errorObj, setErrorObj] = useState({});

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const [checkIfExists, setCheckIfExists] = useState(false);

    const [cookie, setCookie] = useCookies(["userID"])

    function handleChange(event) {
        setRegistrationData(function(prevValue) {
            return {
                ...prevValue,
                [event.target.name]: event.target.value
            }
        })
    }

    async function emailExists(email) {

        try {
            const response = await axios.get(`http://localhost:3001/checkEmail/${email}`);
            return response.data.exists;
          } catch (error) {
            console.error(error);
            return false;
          }
    }

    function validateForm() {

        const tempErrObj = {};
        
        if(registrationData.email.trim() === "") {
            tempErrObj.email = "Email can't be emtpy";
        }

        if(registrationData.name.trim() === "") {
            tempErrObj.name = "Name can't be empty";
        }

        if(registrationData.password === "") {
            tempErrObj.password = "Password can't be empty";
        } else if(!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(registrationData.password)) {
            tempErrObj.password = "Password requirement not met";
        } 

        if(registrationData.confirmPassword === "") {
            tempErrObj.confirmPassword = "This field can't be empty"
        } else if (registrationData.password !== registrationData.confirmPassword) {
            tempErrObj.confirmPassword = "Passwords do not match";
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
      
        if (validated) {
          try {
            const userExists = await emailExists(registrationData.email);
      
            if (userExists) {

              setCheckIfExists(true);

            } else {

                setCheckIfExists(false);
                const response = await axios.post("http://localhost:3001/register", registrationData);
                console.log(response.data);
                setCookie("userID", response.data, {path:"/"});
                navigate("/list");
            }
          } catch (error) {
            // Handle any error that occurred during the request
            alert(error);
          }
        }
      }
      

    return (

        <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className={`form-control ${isFormSubmitted && errorObj.email ? "is-invalid" : ""}`} name="email" id="email" value={registrationData.email} onChange={handleChange} autoComplete="off"/>
                <div class="invalid-feedback">
                    {errorObj.email}
                </div>
            </div>
            <div class="mb-3">
                <label htmlFor="name" className="form-label">Full name</label>
                <input type="text" className={`form-control ${isFormSubmitted && errorObj.name ? "is-invalid" : ""}`} name="name" id="name" value={registrationData.name} onChange={handleChange} autoComplete="off" />
                <div class="invalid-feedback">
                    {errorObj.name}
                </div>
            </div>
            <div class="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className={`form-control ${isFormSubmitted && errorObj.password ? "is-invalid" : ""}`} name="password" id="password" value={registrationData.password} onChange={handleChange}/>
                <div id="passwordHelpBlock" class="form-text">
                    Your password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character
                </div>
                <div class="invalid-feedback">
                    {errorObj.password}
                </div>
            </div>
            <div class="mb-3">
                <label htmlFor="confirm-password" className="form-label">Confirm password</label>
                <input type="password" className={`form-control ${isFormSubmitted && errorObj.confirmPassword ? "is-invalid" : ""}`} name="confirmPassword" id="confirm-password" value={registrationData.confirmPassword} onChange={handleChange}/>
                <div class="invalid-feedback">
                    {errorObj.confirmPassword}
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <div className="exists-paragraph">
                <p>
                    {checkIfExists ? (
                    <span>
                        User already exists. Log in <Link to="/login">here</Link>.
                    </span>
                    ) : (
                    <span>
                        Already a member? Log in <Link to="/login">here</Link>.
                    </span>
                    )}
                </p>
            </div>
        </form>
    );
}