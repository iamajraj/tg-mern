import PropTypes from 'prop-types';
import { useRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container, Link } from '@mui/material';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
import useResponsive from '../../hooks/useResponsive';
// utils
import { bgBlur } from '../../utils/cssStyles';
// config
import { HEADER } from '../../config-global';
// routes
import { PATH_AUTH, PATH_DOCS, PATH_MINIMAL_ON_STORE } from '../../routes/paths';
// components
import Logo from '../../components/logo';
import Label from '../../components/label';
//
// import navConfig from './nav/config-navigation';
import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
import Iconify from '../../components/iconify';
// ----------------------------------------------------------------------

export default function Header() {
  let navConfig = [
    {
      title: 'Home',
      icon: <Iconify icon="eva:home-fill" />,
      path: '/',
    },
    {
      title: 'Products/Services',
      icon: <Iconify icon="ic:round-grain" />,
      path: '/service',
      // children: [{ items: [{ title: 'Demo', path: '#' }] }],
    },
    {
      title: 'About US',
      icon: <Iconify icon="eva:home-fill" />,
      path: '/about-us',
      // children: [{ items: [{ title: 'Demo', path: '#' }] }],
    },
    {
      title: 'MarketPlace Prices',
      icon: <Iconify icon="ic:round-grain" />,
      path: 'https://www.tradingview.com/',
      // children: [{ items: [{ title: 'Demo', path: '#' }] }],
    },
    // {
    //   title: 'Pages',
    //   path: '/pages',
    //   icon: <Iconify icon="eva:file-fill" />,
    //   children: [
    //     {
    //       subheader: 'Other',
    //       items: [
    //         { title: 'About us', path: PATH_PAGE.about },
    //         { title: 'Contact us', path: PATH_PAGE.contact },
    //         { title: 'FAQs', path: PATH_PAGE.faqs },
    //         { title: 'Pricing', path: PATH_PAGE.pricing },
    //         { title: 'Payment', path: PATH_PAGE.payment },
    //         { title: 'Maintenance', path: PATH_PAGE.maintenance },
    //         { title: 'Coming Soon', path: PATH_PAGE.comingSoon },
    //       ],
    //     },
    //     {
    //       subheader: 'Authentication',
    //       items: [
    //         { title: 'Login', path: PATH_AUTH.loginUnprotected },
    //         { title: 'Register', path: PATH_AUTH.registerUnprotected },
    //         { title: 'Reset password', path: PATH_AUTH.resetPassword },
    //         { title: 'Verify code', path: PATH_AUTH.verify },
    //       ],
    //     },
    //     {
    //       subheader: 'Error',
    //       items: [
    //         { title: 'Page 403', path: PATH_PAGE.page403 },
    //         { title: 'Page 404', path: PATH_PAGE.page404 },
    //         { title: 'Page 500', path: PATH_PAGE.page500 },
    //       ],
    //     },
    //     {
    //       subheader: 'Dashboard',
    //       items: [{ title: 'Dashboard', path: PATH_AFTER_LOGIN }],
    //     },
    //   ],
    // },
    // {
    //   title: 'Documentation',
    //   icon: <Iconify icon="eva:book-open-fill" />,
    //   path: PATH_DOCS.root,
    // },
  ];
  if(localStorage.getItem('user') !== null){
    navConfig.push({
      title: 'Logout',
      icon: <Iconify icon="ic:logout" />,
      path: '/logout',
      // children: [{ items: [{ title: 'Demo', path: '#' }] }],
    })
  }else{
    navConfig.push({
      title: 'Login',
      icon: <Iconify icon="ic:round-grain" />,
      path: PATH_AUTH.login,
    },)
  }

  const carouselRef = useRef(null);

  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);
  return (
    <AppBar ref={carouselRef} color="transparent" sx={{ boxShadow: 0 }}>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_MAIN_DESKTOP,
          },
          // ...bgBlur({ color: theme.palette.background.default }),
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(isOffset && {
            ...bgBlur({ color: theme.palette.background.default }),
            height: {
              md: HEADER.H_MAIN_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <Box sx={{ position: 'fixed', top: 12, left: 32 }}>
            <Logo />
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {isDesktop && <NavDesktop isOffset={isOffset} data={navConfig} />}

          <Button
            variant="contained"
            target="_blank"
            rel="noopener"
            href="https://tg-demo-bot.vercel.app/"
            sx={{ color: 'success.main' }}
          >
            Launch App
          </Button>

          {!isDesktop && <NavMobile isOffset={isOffset} data={navConfig} />}
        </Container>
      </Toolbar>

      {isOffset && <Shadow />}
    </AppBar>
  );
}

// ----------------------------------------------------------------------

Shadow.propTypes = {
  sx: PropTypes.object,
};

function Shadow({ sx, ...other }) {
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        zIndex: -1,
        m: 'auto',
        borderRadius: '50%',
        position: 'absolute',
        width: `calc(100% - 48px)`,
        boxShadow: (theme) => theme.customShadows.z8,
        ...sx,
      }}
      {...other}
    />
  );
}
