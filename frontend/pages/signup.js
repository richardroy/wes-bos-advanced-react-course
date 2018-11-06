import React from 'react';
import CreateItem from '../components/CreateItem';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import styled from 'styled-components';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`

const SignupPage = props => (
  <Columns>
    <Singup />
    <Signin />
    <Singup />
  </Columns>
);

export default SignupPage;