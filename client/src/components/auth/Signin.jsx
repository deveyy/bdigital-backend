import React from 'react';
import { commonModalClasses } from '../../utils/theme';
import Container from '../Container';
import FormContainer from '../form/FormContainer';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import Title from '../form/Title';
import CustomLink from '../link/CustomLink';


export default function Signin() {
  return (
    <FormContainer>
      <Container>
        <form className={commonModalClasses + "w-72"}>
            <Title>Sign in</Title>
            <FormInput label="Email" type="email" name="email" placeholder="Please input email" />
            <FormInput label="Password" type="password" name="password" placeholder="Please input password" />
            <Submit value="Sign in" />

            <div className="mt-2 flex justify-between">
                <CustomLink to="/admin/auth/forget-password">Forget password?</CustomLink>
                <CustomLink to="/admin/auth/signup">Sign up</CustomLink>
            </div>
        </form>
      </Container>
    </FormContainer>
  );
}
