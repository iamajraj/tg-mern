// routes
import { PATH_AUTH, PATH_DOCS, PATH_PAGE } from '../../../routes/paths';
// config
import { PATH_AFTER_LOGIN } from '../../../config-global';
// components
import Iconify from '../../../components/iconify';
import { Navigate } from 'react-router';

// ----------------------------------------------------------------------

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
window.alert("NAVIGATION USER"+localStorage.getItem('user'))
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

export default navConfig;
