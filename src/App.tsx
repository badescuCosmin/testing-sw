import { ChakraProvider } from '@chakra-ui/react';
import { Login } from './Login/login';
import { extendTheme } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from './Register/register';
import Dashboard from './Dashboard/dashboard';
import AuthLayut from './components/authLayout';
import List from './List/list';

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
