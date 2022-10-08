import React from 'react';
import Container from '../Container';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import Title from '../form/Title';

export default function ConfirmPassword() {
  return (
    <div className='fixed inset-0 bg-slate-200 -z-10 flex justify-center items-center'>
    <Container>
        <form className='bg-slate-500 rounded p-6 w-72'>
            <Title>Enter New Password</Title>
            <FormInput label="New Password" type="password" name="password" placeholder="Please input password" />
            <FormInput label="Confirm Password" type="password" name="confirmPassword" placeholder="Please input confirm password" />
            <Submit value="Submit" />
        </form>
    </Container>
</div>
  );
}
