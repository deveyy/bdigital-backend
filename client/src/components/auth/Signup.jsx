import React from 'react'
import Container from '../Container'
import FormInput from '../form/FormInput'
import Submit from '../form/Submit'
import Title from '../form/Title'

export default function Signup() {
  return (
    <div className='fixed inset-0 bg-slate-200 -z-10 flex justify-center items-center'>
        <Container>
            <form className='bg-slate-500 rounded p-6 w-72'>
                <Title>Sign up</Title>
                <FormInput label="Name" name="name" placeholder="Please input name" />
                <FormInput label="Email" type="email" name="email" placeholder="Please input email" />
                <FormInput label="Password" type="password" name="password" placeholder="Please input password" />
                <Submit value="Sign up" />

                <div className="mt-2 flex justify-between">
                     <a href="/" className="font-medium 
                      hover:text-indigo-200">
                     Forgot password?
                    </a>
                    <a href="/" className="font-medium 
                      hover:text-indigo-200">
                     Sign in
                    </a>
              </div>
            </form>
        </Container>
    </div>
  )
}
