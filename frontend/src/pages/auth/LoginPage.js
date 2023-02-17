import { Helmet } from 'react-helmet-async';
// sections
import Login from '../../sections/auth/Login';
import { Navigate, useNavigate } from 'react-router';
import { PATH_AUTH, PATH_PAGE } from '../../routes/paths';
// import Login from '../../sections/auth/LoginAuth0';

// ----------------------------------------------------------------------

export default function LoginPage() {
  console.log("LOGIN PAGE :",localStorage.getItem('user'))
  if(localStorage.getItem('user') !== null){
    window.location.href = PATH_PAGE.dashboard;
  }

  return (
    <>
      <Helmet>
        <title> Login | Minimal UI</title>
      </Helmet>

      <Login />
    </>
  );
}
