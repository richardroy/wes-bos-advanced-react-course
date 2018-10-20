import React from 'react';
import CreateItem from '../components/CreateItem';
import Singup from '../components/Singup';
import styled from 'styled-components';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`

const SignupPage = props => (
  <Columns>
    <Singup />
    <Singup />
    <Singup />
  </Columns>
);

export default SignupPage;