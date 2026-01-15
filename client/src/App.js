import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import { Routers } from './Routers/Routers';
import { getUser } from './component/State/Authentication/Action';
import { getAllRestaurantAction, getRestaurantByUserId } from './component/State/Restaurant/Action';
import { findCart } from './component/State/Cart/Action';
import { checkBackendHealth } from './component/config/healthCheck';
import { api } from './component/config/api';
import './App.css';
import { BackendLoader } from './component/config/BackendLoader';

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  
  const [backendReady, setBackendReady] = useState(false);
  const [checkingBackend, setCheckingBackend] = useState(true);

  // Check backend health on mount
  useEffect(() => {
    const checkBackend = async () => {
      let attempts = 0;
      const maxAttempts = 20; // Try for ~20 seconds

      while (attempts < maxAttempts) {
        const isHealthy = await checkBackendHealth(api.defaults.baseURL);
        if (isHealthy) {
          setBackendReady(true);
          setCheckingBackend(false);
          return;
        }
        attempts++;
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second between attempts
      }

      // After max attempts, proceed anyway (user can see real errors)
      setBackendReady(true);
      setCheckingBackend(false);
    };

    checkBackend();
  }, []);

  // Load user data once backend is ready
  useEffect(() => {
    if (backendReady) {
      dispatch(getUser(auth.jwt || jwt));
      dispatch(findCart(jwt));
      dispatch(getAllRestaurantAction());
    }
  }, [backendReady, auth.jwt]);

  useEffect(() => {
    if (backendReady) {
      dispatch(getRestaurantByUserId(auth.jwt || jwt));
    }
  }, [backendReady, auth.user]);

  // Show loader while checking backend
  if (checkingBackend) {
    return <BackendLoader/>;
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  );
}

export default App;