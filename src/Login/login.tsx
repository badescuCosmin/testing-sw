import {
  Box,
  Button,
  Input,
  Text,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import { useValidate } from '../hooks/validation.hook';

const SCHEMA = {
  email: {
    isRequired: true,
    rules: [
      {
        test: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        error: 'Not a correct email address',
      },
      {
        test: /^(?!.*pass).*$/i,
        error: 'Should not contain pass word',
      },
      {
        test: /^.{6,49}$/,
        error: 'The length should be between 6 and 10 chars',
      },
    ],
  },
  password: {
    isRequired: true,
    rules: [
      {
        test: /^.{1,20}$/,
        error: 'password is too long max 20 chars',
      },
      {
        test: /^.{3,}$/,
        error: 'password is too shor min 3 chars',
      },
    ],
  },
};

export const Login = () => {
  const form = useValidate(SCHEMA);
  const navigate = useNavigate();
  const { handleChange, formErrors, isFormValid, values } = form;

  return (
    <Box>
      <FormControl
        isRequired
        isInvalid={!!formErrors?.email?.length}
        my={5}
        textAlign="left"
      >
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={values?.email || ''}
          onChange={handleChange}
        />
        {formErrors?.email?.map((err, i) => (
          <Text key={i} color="red">
            {err}
          </Text>
        ))}
      </FormControl>
      <FormControl
        textAlign="left"
        isRequired
        isInvalid={!!formErrors?.password?.length}
      >
        <FormLabel>Passowrd</FormLabel>
        <Input
          placeholder="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={values?.password || ''}
        />
        {formErrors?.password?.map((err, i) => (
          <Text key={i} color="red">
            {err}
          </Text>
        ))}
      </FormControl>

      <Button
        isDisabled={!isFormValid}
        mt={10}
        onClick={() => {
          if (values.email === 'test@gmail.com' && values.password === '1234') {
            navigate('/');
          }
        }}
      >
        Login
      </Button>
    </Box>
  );
};
