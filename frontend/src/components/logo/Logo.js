import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Link } from '@mui/material';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const theme = useTheme();
  const location = useLocation();
  console.log('location==>',location);

  // OR using local (public folder)
  // -------------------------------------------------------
  // const logo = (
  //   <Box
  //     component="img"
  //     src="/logo/logo_single.svg" => your path
  //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
  //   />
  // );

  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 100,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      {/* <video autoPlay muted loop width="100%">
        <source src="/logo/logo1.mp4" />
      </video> */}
      <Box component="img" src="/logo/logo.gif" />
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  let to = '';
  if(location.pathname.includes('verify')){
    to = '/logout';
  }
  return (
    <Link component={RouterLink} to={to} sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  sx: PropTypes.object,
  disabledLink: PropTypes.bool,
};

export default Logo;
