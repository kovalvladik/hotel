import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}




const useValidation = (value, validations) => {
    const [isEmpty, setIsEmpty] = useState(true)
    const [inputValid, setInputValid] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passError, setPassError] = useState(false)
    const [minLengthError, setMinLengthError] = useState(false)

    useEffect(()=>{
        for (const validation in validations){
            switch (validation){
                case 'minLengthError':
                    value.length < validations[validation] ?setMinLengthError(true):setMinLengthError(false)
                    break
                case 'isEmpty':
                    value.length>0 ? setIsEmpty(false) : setIsEmpty(true)
                    break
                case 'passError':
                    const regexp = /^[a-z\s]+$/i;
                    regexp.test(String(value).toLowerCase()) ? setPassError(false) : setPassError(true)
                    break
                case 'emailError':
                    const reg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
                    reg.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                    break
            }
        }
    },[value])

    useEffect(()=>{
        if(isEmpty || minLengthError || emailError || passError){

            setInputValid(false)
        }else {
            setInputValid(true)
        }

    },[isEmpty,minLengthError,emailError,passError])
    return{
        isEmpty,
        minLengthError,
        emailError,
        passError,
        inputValid
    }

}

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setIsDirty] = useState(false)
    const valid = useValidation(value,validations)
    const onChange = (e) => {
        setValue(e.target.value)
    }
    const onBlur = (e) => {
        setIsDirty(true)
    }
    return{
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }




    const email = useInput('', {isEmpty:true, emailError:true })
    const pass = useInput('',{isEmpty:true,passError:true,minLengthError:8 })

    const handleChangePass = (e) => {
        setPassword(e.target.value)
        pass.onChange(e)

    }
    const handleChangeEmail = (e) => {
        setUserName(e.target.value)
        email.onChange(e)

    }
    console.log(email)
    console.log(pass)




    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    {(email.isDirty && email.isEmpty) && <div style={{color:'red'}}>  пустое</div>}
                    {(email.isDirty && email.emailError) && <div style={{color:'red'}}>  корявый</div>}
                    <input type="text" onChange={e => handleChangeEmail(e)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => handleChangePass(e)} />
                </label>
                <div>
                    <button disabled={!email.inputValid||!pass.inputValid} type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};

