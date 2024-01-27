import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { LeftNavBar } from './components/LeftNavBar/LeftNavBar';
import { Outlet } from 'react-router-dom';

export default function App() {
  const Layout = () => {
    return (
      <>
        <Outlet />
        <LeftNavBar />
      </>
    );
  };

  return (
    <MantineProvider theme={theme}>
      <Layout />
      <Router />
    </MantineProvider>
  );
}
