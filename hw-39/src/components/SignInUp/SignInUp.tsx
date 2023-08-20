import React, {FC} from 'react'
import PageTemplate from '../PageTemplate'
import Input from '../Input'
import Button from '../Button'
import "./SignInUp.css"

interface ISignInUp {
    text: 'Sign Up' | 'Sign In',
}

const SignInUp:FC<ISignInUp> = ({text}) => {
  return (
    <PageTemplate title={text}>
        <form>
            {text === 'Sign Up' && <Input type='text' label='Name' placeholder='Your name' />}
            <Input type='email' label='Email' placeholder='Your email' />
            <Input type='password' label='Password' placeholder='Your password' />
            {text === 'Sign Up' && <Input type='password' label='Confirm password' placeholder='Confirm password' />}
            {text === 'Sign In' && <a href="#" className='forgot-password'>Forgot password?</a>}
            <Button text={text} />
            <p className='have-account'>{text === 'Sign Up' ? 'Already' : 'Don\'t'} have an account? <a href="#">{text === 'Sign Up' ? 'Sign In' : 'Sign Up'}</a></p>
        </form>
    </PageTemplate>
  )
}

export default SignInUp
