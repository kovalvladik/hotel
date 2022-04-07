import React, {useState} from 'react';
import  './AuthWindow.css'
import {Link} from "react-router-dom";

const AuthWindow = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [valid, setValid] = useState(false)


    const handleEmail = (e) => {
      setEmail(e.target.value)
    }
    const handlePass = (e) => {
        setPass(e.target.value)
    }
    console.log(email)
    console.log(pass)

    return (
        <div className='AuthWindow_container'>
            <input className="AuthWindow_input" onChange={(e)=>handleEmail(e)} value={email}/>
            <input className="AuthWindow_input" onChange={(e)=>handlePass(e)} value={pass}/>
            <div>
                <button>
                    <Link to='/main'>
                        Войти
                    </Link>
                </button>
            </div>

        </div>
    );
};

export default AuthWindow;
