import { Helmet } from 'react-helmet-async';
// @mui
import { Divider } from '@mui/material';
import Dashboard from '../sections/dashboard/Dashboard';
import { setSession } from '../auth/utils';
import { Navigate } from 'react-router';
import { PATH_AUTH, PATH_PAGE } from '../routes/paths';

// ----------------------------------------------------------------------

export default function LogoutPage() {
  setSession();
  localStorage.removeItem('user');
  return <Navigate to='/auth/login' />;
}
