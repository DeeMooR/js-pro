import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux';
import PageTemplate from 'src/components/PageTemplate'
import Input from 'src/components/Input'
import Button from 'src/components/Button'
import "./SignInUp.css"
import { CREATE_USER } from 'src/actions/actions';

interface ISignInUp {
    text: 'Sign Up' | 'Sign In',
}

const SignInUp: FC<ISignInUp> = ({ text }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();

    console.log(name);

    return (
        <PageTemplate title={text} hasBack type_header='not authorized'>
            <form>
                {text === 'Sign Up' && <Input type='text' label='Name' placeholder='Your name' value={name} handleChange={setName} />}
                <Input type='email' label='Email' placeholder='Your email' value={email} handleChange={setEmail} />
                <Input type='password' label='Password' placeholder='Your password' value={password} handleChange={setPassword} />
                {text === 'Sign Up' && <Input type='password' label='Confirm password' placeholder='Confirm password' value={confirmPassword} handleChange={setConfirmPassword} />}
                {text === 'Sign In' && <a href="#" className='forgot-password'>Forgot password?</a>}
                {/* @ts-expect-error */}
                <Button text={text} handleClick={() => dispatch(CREATE_USER({username: name, email, password}))} />
                <p className='have-account'>{text === 'Sign Up' ? 'Already' : 'Don\'t'} have an account? <a href="#">{text === 'Sign Up' ? 'Sign In' : 'Sign Up'}</a></p>
            </form>
        </PageTemplate>
    )
}

export default SignInUp
