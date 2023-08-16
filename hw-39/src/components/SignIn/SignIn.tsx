import React from 'react'
import PageTemplate from '../PageTemplate'
import Input from '../Input'
import Button from '../Button'
import "./SignIn.css"

const SignIn = () => {
  return (
    <PageTemplate title='Sign In'>
        <form>
            <Input type='email' label='Email' placeholder='Your email' />
            <Input type='password' label='Password' placeholder='Your password' />
            <a href="#" className='forgot-password'>Forgot password?</a>
            <Button text='Sign In' />
            <p className='no-account'>Don't have an account? <a href="#">Sing Up</a></p>
        </form>
    </PageTemplate>
  )
}

export default SignIn
