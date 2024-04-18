import { expect, test } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Login from './login';

import { BrowserRouter } from 'react-router-dom';

describe('Suite', () => {
  test('Renders login', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );
    const button = screen.getByTestId('login-btn');
    expect(button).toBeInTheDocument();
  });
});
