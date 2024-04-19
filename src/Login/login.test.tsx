import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Login from './login';
import userEvent from '@testing-library/user-event';

import { BrowserRouter } from 'react-router-dom';

beforeEach(() => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>,
  );
});

it('should have login btn disabled', () => {
  const loginBtn = screen.getByTestId('login-btn');
  expect(loginBtn).toBeDisabled();
});

it('email input should have error messages', async () => {
  const user = userEvent.setup();
  const loginBtn = screen.getByTestId('login-btn');
  const emailInput = screen.getByTestId('email-input');
  await user.type(emailInput, 'testpass');
  expect(emailInput).toHaveValue('testpass');
  const errorMessage = screen.getByText('Not a correct email address');
  const errorMessage2 = screen.getByText('Should not contain pass word');
  expect(errorMessage).toBeInTheDocument();
  expect(errorMessage2).toBeInTheDocument();
  // login button should be disabled
  expect(loginBtn).toBeDisabled();
});

it('email input should not display error messages if the value is correct', async () => {
  const user = userEvent.setup();
  const loginBtn = screen.getByTestId('login-btn');
  const emailInput = screen.getByTestId('email-input');
  await user.type(emailInput, 'test@gmail.com');
  const errorMessage = screen.queryByText('Not a correct email address');
  const errorMessage2 = screen.queryByText('Should not contain pass word');
  expect(errorMessage).not.toBeInTheDocument();
  expect(errorMessage2).not.toBeInTheDocument();
  // login button should be disabled
  expect(loginBtn).toBeDisabled();
});

it('email input should display error messages if password is not correct', async () => {
  const user = userEvent.setup();
  const loginBtn = screen.getByTestId('login-btn');
  const passwordInput = screen.getByTestId('password-input');
  await user.type(passwordInput, 'paasdasdasdasdasdasdasd123123123123dd@@!!');
  const errorMessage = screen.getByText('password is too long max 20 chars');
  expect(errorMessage).toBeInTheDocument();
  // login button should be disabled
  expect(loginBtn).toBeDisabled();
});

it('should be able to click the login button', async () => {
  const user = userEvent.setup();
  const loginBtn = screen.getByTestId('login-btn');
  const passwordInput = screen.getByTestId('password-input');
  await user.type(passwordInput, '@@!dsd!');
  const emailInput = screen.getByTestId('email-input');
  await user.type(emailInput, 'test@gmail.com');

  // login button should be disabled
  expect(loginBtn).not.toBeDisabled();
});
