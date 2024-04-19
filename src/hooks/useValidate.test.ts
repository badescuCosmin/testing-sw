import { act } from 'react-dom/test-utils';
import { SCHEMA } from '../Login/login';
import { useValidate } from './usevalidate.hook';
import { renderHook } from '@testing-library/react-hooks';

it('check the initial state', () => {
  const { result } = renderHook(() => useValidate(SCHEMA));

  expect(result.current.isFormValid).toBe(false);
  expect(result.current.formErrors).toStrictEqual({});
  expect(result.current.values).toStrictEqual({});
});

it('validate email', () => {
  const { result } = renderHook(() => useValidate(SCHEMA));

  act(() => {
    result.current.handleChange({
      target: { name: 'email', value: 'testmorethan10letterspass@gmail.com' },
    });
  });
  expect(result.current.values.email).toBe(
    'testmorethan10letterspass@gmail.com',
  );
  expect(result.current.formErrors.email).toStrictEqual([
    'Should not contain pass word',
  ]);
  expect(result.current.isFormValid).toBe(false);
});

it('validate password', () => {
  const { result } = renderHook(() => useValidate(SCHEMA));

  act(() => {
    result.current.handleChange({
      target: { name: 'password', value: 'da' },
    });
  });

  expect(result.current.formErrors.password).toStrictEqual([
    'password is too shor min 3 chars',
  ]);

  expect(result.current.isFormValid).toBe(false);
});

it('type incorrect email and correct password and check if form is valid', () => {
  const { result } = renderHook(() => useValidate(SCHEMA));

  act(() => {
    result.current.handleChange({
      target: { name: 'password', value: 'somepass' },
    });
  });

  act(() => {
    result.current.handleChange({
      target: { name: 'email', value: 'ssss' },
    });
  });

  expect(result.current.formErrors.email).toStrictEqual([
    'Not a correct email address',
    'The length should be between 6 and 49 chars',
  ]);

  expect(result.current.isFormValid).toBe(false);
});

it('type correct email and correct password and check if form is valid and no formErrors are present', () => {
  const { result } = renderHook(() => useValidate(SCHEMA));

  act(() => {
    result.current.handleChange({
      target: { name: 'password', value: 'somepass' },
    });
  });

  act(() => {
    result.current.handleChange({
      target: { name: 'email', value: 'test@gmail.com' },
    });
  });
  expect(result.current.formErrors.email).toStrictEqual([]);
  expect(result.current.formErrors.password).toStrictEqual([]);
  expect(result.current.isFormValid).toBe(true);
});
