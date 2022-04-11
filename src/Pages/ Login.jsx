import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './Login.css'

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
        console.log(token)
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
    // console.log(email)
    // console.log(pass)




    return(
        <div className='login-container'>
            <div className="login-wrapper">
                <h1 className='login-wrapper__label'>Simple Hotel Check</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p style={email.emailError ?{color:'red'}:null} className='login-wrapper__name'>Логин</p>

                        <input placeholder={email.emailError ?'login@mail.com':null} className='login-wrapper__input' type="text" onChange={e => handleChangeEmail(e)} />
                        {/*{email.isEmpty?<div style={{color:'red'}}>  пустое</div>:null}*/}
                        { email.emailError ? <div style={{color:'red'}}  className='login-wrapper__name'> Некорректый  Email</div>:null}
                    </label>
                    <label>
                        <p style={pass.passError ?{color:'red'}:null}  className='login-wrapper__name'>Пароль</p>
                        <input className='login-wrapper__input' type="password"  onChange={e => handleChangePass(e)} />
                        {/*{pass.isDirty && pass.isEmpty?<div style={{color:'red'}}>  пустое</div>:null}*/}
                        { pass.passError ? <div style={{color:'red'}}  className='login-wrapper__name'>  Пароль должен быть длиннее 8 символов</div>:null}
                    </label>
                    <div className='btn_containet'>
                        <button className='login-wrapper__btn' disabled={!email.inputValid||!pass.inputValid} type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};

