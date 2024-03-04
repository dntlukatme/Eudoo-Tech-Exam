import { useState, useNavigate } from 'react';


const Register = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    const handleSubmit = () => {
        setFirstName(firstName);
        setLastName(lastName);
        setEmail(email);
        setPassword(password);
        setConfirm(confirm);
        
        if (password !== confirm) {
            alert ("Password does not match");
        } else {
            alert ("success")
        }
    }

    return ( 
        <>
        <div>
            <p>First Name: <input className="firstName"></input></p>
            <p>Last Name: <input className="lastName"></input></p>
            <p>Email: <input className="email"></input></p>
            <p>Password: <input className="password"></input></p>
            <p>Confirm Password: <input className="confirm"></input></p>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        <div>
            <p>Welcome, {firstName} {lastName}</p>
            <p>Thank you for signing up. Please verify your signup details.</p>
            <p>Email: {email}</p>
            <p>Password: {confirm}</p>
        </div>
        </>
     );
     
}
 
export default Register;