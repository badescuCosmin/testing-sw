import { Box, Text } from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthLayout } from '../hooks/authLayout.hook';

const AuthLayut = () => {
  const {
    title,
    description,
    navigation: { name, link },
  } = useAuthLayout();
  return (
    <Box textAlign="center" mt={20} width="50%" mx="auto">
      <Text fontSize="6xl">{title}</Text>
      <Text fontSize="4xl">{description}</Text>
      <Box width="70%" mx="auto">
        <Outlet />
      </Box>
      <Link
        style={{
          display: 'block',
          color: 'blue',
          textDecoration: 'underline',
          marginTop: '40px',
        }}
        to={link}
      >
        {name}
      </Link>
    </Box>
  );
};

export default AuthLayut;
