import { ChakraProvider } from '@chakra-ui/react';

import { extendTheme } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AuthLayut from './components/authLayout';

import { lazy } from 'react';
const Login = lazy(() => import('./Login/login'));
const Register = lazy(() => import('./Register/register'));
const Dashboard = lazy(() => import('./Dashboard/dashboard'));
const List = lazy(() => import('./List/list'));

const theme = extendTheme({
  colors: {
    brand: '#abcde',
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route element={<AuthLayut />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
