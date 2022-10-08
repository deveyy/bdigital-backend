import React from 'react';
import Container from '../Container';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import Title from '../form/Title';
import CustomLink from '../link/CustomLink';

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
                  <CustomLink to="/admin/auth/forget-password">Forget password?</CustomLink>
                  <CustomLink to="/admin/auth/signin">Sign in</CustomLink>
              </div>
            </form>
        </Container>
    </div>
  );
}