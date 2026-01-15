import axios from 'axios';
import { api } from './api';

export const checkBackendHealth = async (backendUrl = api.defaults.baseURL) => {
  try {
    const response = await axios.get(`${backendUrl}api/health`, {
      timeout: 5000 // 5 second timeout
    });
    return response.status === 200;
  } catch (error) {
    return false;
  }
};