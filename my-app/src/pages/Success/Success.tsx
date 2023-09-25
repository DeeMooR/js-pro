import React from 'react'
import PageTemplate from 'src/components/PageTemplate'
import Button from 'src/components/Button'
import "./Success.css"
import { useNavigate } from 'react-router-dom'

const Success = () => {
    const navigate = useNavigate();
    
    return (
        <PageTemplate title='Success' hasBack type_header='authorized'>
            <form>
                <p className='success-text'>Email confirmes.<br/>Your registration is now completed</p>
                <Button text='Go to home' handleClick={() => navigate('/blog')} />
            </form>
        </PageTemplate>
    )
}

export default Success
