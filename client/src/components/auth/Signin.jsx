import React from 'react'
import Container from '../Container'
import FormInput from '../form/FormInput'
import Title from '../form/Title'

export default function Signin() {
  return (
    <div className='fixed inset-0 bg-slate-200 -z-10 flex justify-center items-center'>
        <Container>
            <form className='bg-slate-500 rounded p-6 w-72'>
                <Title>Sign in</Title>
                <FormInput label="Email" type="email" name="email" placeholder="Please input email" />
                <FormInput label="Password" type="password" name="password" placeholder="Please input password" />
            </form>
        </Container>
    </div>
  )
}
