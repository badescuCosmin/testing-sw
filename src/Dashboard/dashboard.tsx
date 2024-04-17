import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Box,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <Box m={20}>
      <Menu>
        <MenuButton as={Button} rightIcon={<div>x</div>}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => navigate('/list')}>List page</MenuItem>
          <MenuItem onClick={() => navigate('/filter')}>
            Filter component
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Dashboard;
