import React from 'react'
import PageTemplate from 'src/components/PageTemplate'
import Button from 'src/components/Button'
import "./Success.css"



const Success = () => {
    return (
        <PageTemplate title='Success' hasBack type_header='authorized'>
            <form>
                <p className='success-text'>Email confirmes.<br/>Your registration is now completed</p>
                <Button text='Go to home' />
            </form>
        </PageTemplate>
    )
}

export default Success
