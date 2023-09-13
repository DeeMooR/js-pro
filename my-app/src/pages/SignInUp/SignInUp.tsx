import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux';
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import PageTemplate from 'src/components/PageTemplate'
import Input from 'src/components/Input'
import Button from 'src/components/Button'
import "./SignInUp.css"
import { CREATE_USER, SIGN_IN } from 'src/actions/actions';
import { Link, useNavigate } from 'react-router-dom';

interface ISignInUp {
    text: 'Sign Up' | 'Sign In',
}

const SignInUp: FC<ISignInUp> = ({ text }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
    const navigate = useNavigate();

    console.log(name);

    return (
        <PageTemplate title={text} hasBack type_header='not authorized'>
            <form>
                {text === 'Sign Up' && <Input type='text' label='Name' placeholder='Your name' value={name} handleChange={setName} />}
                <Input type='email' label='Email' placeholder='Your email' value={email} handleChange={setEmail} />
                <Input type='password' label='Password' placeholder='Your password' value={password} handleChange={setPassword} />
                {text === 'Sign Up' && <Input type='password' label='Confirm password' placeholder='Confirm password' value={confirmPassword} handleChange={setConfirmPassword} />}
                {text === 'Sign In' && <a href="#" className='forgot-password'>Forgot password?</a>}
                {text === 'Sign Up' && <Button text={text} handleClick={() => dispatch(CREATE_USER({username: name, email, password}))} />}
                {text === 'Sign In' && <Button text={text} handleClick={() => dispatch(SIGN_IN(navigate, email, password))} />}
                <p className='have-account'>{text === 'Sign Up' ? 'Already' : 'Don\'t'} have an account? <Link to={text === 'Sign Up' ? '/sign-in' : '/sign-up'} >{text === 'Sign Up' ? 'Sign In' : 'Sign Up'}</Link></p>
            </form>
        </PageTemplate>
    )
}

export default SignInUp
