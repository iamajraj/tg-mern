import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
// routes
import { PATH_DASHBOARD, PATH_PAGE } from '../routes/paths';
// components
import LoadingScreen from '../components/loading-screen';
//
import { useAuthContext } from './useAuthContext';

// ----------------------------------------------------------------------

GuestGuard.propTypes = {
  children: PropTypes.node,
};

export default function GuestGuard({ children }) {
  const { isAuthenticated, isInitialized } = useAuthContext();

  // if (isAuthenticated) {
  //   return <Navigate to={PATH_PAGE.dashboard} />;
  // }

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  return <> {children} </>;
}
