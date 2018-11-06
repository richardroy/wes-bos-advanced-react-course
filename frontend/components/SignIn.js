import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';

const SINGIN_MUTATION = gql`
  mutation SINGUP_MUTATION($email: String!, $password: String!) {
    signip(email: $email, password: $password) {
      id
      email
    }
  }
`;

class Signin extends Component {
  state = {
    name: '',
    password: '',
    email: ''
  }

  saveToState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <Mutation mutation={SINGIN_MUTATION} variables={this.state}>
        {(signin, {error, loading}) => {
          return (
          <Form method="post" onSubmit={async (e) => {
            e.preventDefault();
            await signin();
            this.setState({name: '', email: '', password: ''});
          }}>
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Singup for an account!</h2>
              <Error error={error} />
              <label htmlFor="email">
                Email
                <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.saveToState} />
              </label>
              <label htmlFor="password">
                Password
                <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.saveToState} />
              </label>

              <button type="submit">Sing Up!</button>
            </fieldset>
          </Form>
          )
        }}
      </Mutation>
    );
  }
}

export default Signin;