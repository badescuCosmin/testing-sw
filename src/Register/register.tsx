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
  username: {
    rules: [
      {
        test: /^.{0,15}$/,
        error: 'password is too long max 15 chars',
      },
    ],
  },
};

const Register = () => {
  const form = useValidate(SCHEMA);
  const navigate = useNavigate();
  const { handleChange, formErrors, isFormValid, values } = form;

  return (
    <Box>
      <FormControl
        isInvalid={!!formErrors?.username?.length}
        my={5}
        textAlign="left"
      >
        <FormLabel>Username</FormLabel>
        <Input
          type="email"
          placeholder="Email"
          name="username"
          value={values?.username || ''}
          onChange={handleChange}
        />
        {formErrors?.username?.map((err, i) => (
          <Text key={i} color="red">
            {err}
          </Text>
        ))}
      </FormControl>
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
          navigate('/login');
        }}
      >
        Register
      </Button>
    </Box>
  );
};

export default Register;
