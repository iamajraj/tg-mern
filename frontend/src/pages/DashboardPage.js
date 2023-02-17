import { Helmet } from 'react-helmet-async';
// @mui
import { Divider } from '@mui/material';
import Dashboard from '../sections/dashboard/Dashboard';
import { Navigate } from 'react-router';
import { PATH_AUTH } from '../routes/paths';
import { use } from 'i18next';

// ----------------------------------------------------------------------

export default function DashboardPage() {
  let user = localStorage.getItem('user');
  if(user === null){
    window.location.href = PATH_AUTH.login;
  }
  user = JSON.parse(user);
  if(user.email_verified_at === null || user.email_verified_at === undefined){
    window.location.href = PATH_AUTH.verify;
  }
  return (
    <>
      <Helmet>
        <title> Dashboard| TG</title>
      </Helmet>
      <Dashboard />
    </>
  );
}
