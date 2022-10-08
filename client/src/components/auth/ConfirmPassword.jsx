import React from 'react';
import { commonModalClasses } from '../../utils/theme';
import Container from '../Container';
import FormContainer from '../form/FormContainer';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import Title from '../form/Title';

export default function ConfirmPassword() {
  return (
    <FormContainer>
      <Container>
          <form className={commonModalClasses + " w-96"}>
              <Title>Enter New Password</Title>
              <FormInput label="New Password" type="password" name="password" placeholder="Please input password" />
              <FormInput label="Confirm Password" type="password" name="confirmPassword" placeholder="Please input confirm password" />
              <Submit value="Submit" />
          </form>
      </Container>
    </FormContainer>
  );
}
