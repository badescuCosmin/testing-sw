import { useLocation } from 'react-router-dom';

export const useAuthLayout = () => {
  const location = useLocation();
  if (location.pathname.includes('/login')) {
    return {
      title: 'Login page',
      description: 'Welcome to the login page',
      navigation: {
        link: '/register',
        name: 'Navigate to register',
      },
    };
  }
  return {
    title: 'Register page',
    description: 'Welcome to the register page',
    navigation: {
      link: '/login',
      name: 'Navigate to login',
    },
  };
};
