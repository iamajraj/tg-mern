import { Helmet } from 'react-helmet-async';
import { m, useScroll, useSpring } from 'framer-motion';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
// sections
import {
  HomeHero,
  HomeMinimal,
  HomeSection1,
  HomeSection2,
  HomeSection3,
  HomeSection4,
  HomeAdvertisement,
} from '../sections/home';
import { PATH_PAGE } from '../routes/paths';

// ----------------------------------------------------------------------

export default function HomePage() {
  const theme = useTheme();

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  if(localStorage.getItem('user') !== null){
    window.location.href = PATH_PAGE.dashboard;
  }

  const progress = (
    <m.div
      style={{
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 1999,
        position: 'fixed',
        transformOrigin: '0%',
        backgroundColor: theme.palette.primary.main,
        scaleX,
      }}
    />
  );

  return (
    <>
      <Helmet>
        <title> TG </title>
      </Helmet>

      <HomeHero />

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <HomeMinimal />

        <HomeSection1 />

        <HomeSection2 />

        <HomeSection3 />
        <HomeSection4 />

        <HomeAdvertisement />
      </Box>
    </>
  );
}
