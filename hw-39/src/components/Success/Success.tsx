import React from 'react'
import PageTemplate from '../PageTemplate'
import Button from '../Button'
import "./Success.css"

const Success = () => {
  return (
    <PageTemplate title='Success'>
        <form>
            <p className='success-text'>Email confirmes.<br/>Your registration is now completed</p>
            <Button text='Go to home' />
        </form>
    </PageTemplate>
  )
}

export default Success
