import React from 'react'
import { useState } from 'react'
import Container from '../Container'
import Submit from '../form/Submit'
import Title from '../form/Title'

const OTP_LENGTH = 6;

export default function EmailVerification() {
    const [otp] = useState(new Array(OTP_LENGTH).fill(''))
 
    return (
    <div className='fixed inset-0 bg-slate-200 -z-10 flex justify-center items-center'>
        <Container>
            <form className='bg-slate-400 rounded p-6 w-96'>
                <div>
                   <Title>OTP Verify Account</Title>
                   <p className="text-center dark:text-dark-subtle text-light-subtle">
                    OTP has been sent to your email
                    </p>
                </div>
                <div className="flex justify-center items-center space-x-4 mt-4"> 
                {otp.map((_, index) => {
                    return <input type='number' className="w-10 h-10 border-2 dark:border-dark-subtle border-light-subtle dark:focus:border-white focus:border-primary rounded bg-transparent outline-none text-center dark:text-white text-primary font-semibold text-xl spin-button-none" />
                })}
                </div>
                <Submit value="Verify Account" />
            </form>
        </Container>
    </div>
  )
}
