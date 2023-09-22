import { Box } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Box padding={5}>
        <Outlet></Outlet>
      </Box>
    </>
  );
};

export default Layout;
