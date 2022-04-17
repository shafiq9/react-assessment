import React, {useState,setState} from 'react';
import './style.css';
function LoginForm() {
    
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
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

    const handleSubmit  = () => {
        console.log(email,password,confirmPassword);
    }

    return(
        <div className="form">
          <h2 className='text-center'>Login</h2>
            <div className="form-body">
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
                <button onClick={()=>handleSubmit()} type="submit" className="btn btn-success">Login</button>
            </div>
        </div>
       
    )       
}

export default LoginForm;