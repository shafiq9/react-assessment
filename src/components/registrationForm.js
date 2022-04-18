import React, {useState,setState} from 'react';
import './style.css';


function RegistrationForm() {
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

     const handleSubmit  = async() => {

        let item = {firstName,lastName,email,password,confirmPassword};

        let result = await fetch("https://centralin-staging.clusterfintech.com/api/Users", {
            method: 'POST',
            body:JSON.stringify(item),
            headers:{
                "content-type":'application/json',
                "Accept":'application/json'
            } 
        });

        result = await result.json();

        // console.log(firstName,lastName,email,password,confirmPassword);
        
    }

    return(
        <div className="form">
              <h2 className='text-center'>Registration</h2>
            <div className="form-body">
                <div className="username">
                    <label className="form-label" for="firstName">First Name </label>
                    <input className="form-input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form-label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form-input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div className="email">
                    <label className="form-label" for="email">Email </label>
                    <input  type="email" id="email" className="form-input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form-label" for="password">Password </label>
                    <input className="form-input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form-label" for="confirmPassword">Confirm Password </label>
                    <input className="form-input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
            </div>
            <div className="btn-group">
                <button onClick={()=>handleSubmit()} type="submit" className="btn btn-primary">Register</button>
            </div>
        </div>
       
    )       
}

export default RegistrationForm;