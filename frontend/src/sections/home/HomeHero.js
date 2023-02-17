import { m, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled, alpha, useTheme } from '@mui/material/styles';
import {
  Button,
  Box,
  Link,
  Container,
  Typography,
  Stack,
  Grid,
  Rating,
  Hidden,
} from '@mui/material';
// routes
import { PATH_DASHBOARD, PATH_FIGMA_PREVIEW, PATH_FREE_VERSION } from '../../routes/paths';
// hooks
import useResponsive from '../../hooks/useResponsive';
// utils
import { textGradient, bgGradient } from '../../utils/cssStyles';
// config
import { HEADER } from '../../config-global';
// components
import SvgColor from '../../components/svg-color';
import Iconify from '../../components/iconify';
import { MotionContainer, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  ...bgGradient({
    imgUrl: '/assets/background/overlay_2.jpg',
  }),
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    position: 'fixed',
  },
}));

const StyledDescription = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '50%',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  // padding: theme.spacing(15, 0),
  height: '100%',
  backdropFilter: 'blur(10px)',
  [theme.breakpoints.down('md')]: {
    position: 'relative',
    marginTop: 24,
  },
}));

const StyledGradientText = styled(m.h1)(({ theme }) => ({
  ...textGradient(
    `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 25%, ${theme.palette.primary.main} 50%, ${theme.palette.warning.main} 75%, ${theme.palette.primary.main} 100%`
  ),
  backgroundSize: '400%',
  fontFamily: "'Barlow', sans-serif",
  fontSize: `${32 / 16}rem`,
  textAlign: 'center',
  lineHeight: 0.9,
  padding: 0,
  marginTop: 8,
  marginBottom: 24,
  letterSpacing: 8,
  [theme.breakpoints.up('md')]: {
    fontSize: `${80 / 16}rem`,
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  const isDesktop = useResponsive('up', 'md');

  const { scrollYProgress } = useScroll();

  const [hide, setHide] = useState(false);

  useEffect(
    () =>
      scrollYProgress.on('change', (scrollHeight) => {
        if (scrollHeight > 0.8) {
          setHide(true);
        } else {
          setHide(false);
        }
      }),
    [scrollYProgress]
  );

  return (
    <>
      <StyledRoot sx={{ ...(hide && { opacity: 0 }) }}>
        <video autoPlay muted loop playsInline width="100%">
          <source src="/assets/videos/hero.mp4" />
        </video>
        <Hidden mdDown>
          <Container component={MotionContainer} sx={{ height: 1 }}>
            <Grid container spacing={10} sx={{ height: 1 }}>
              <Grid item xs={12} md={6} sx={{ height: 1 }}>
                <Description />
              </Grid>
            </Grid>
          </Container>
        </Hidden>
        <Hidden mdUp>
          <Container component={MotionContainer} sx={{ height: 1 }}>
            <Description />
          </Container>
        </Hidden>
      </StyledRoot>

      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}

// ----------------------------------------------------------------------

function Description() {
  return (
    <StyledDescription>
      <m.div variants={varFade().in}>
        <Typography sx={{ textAlign: 'center', fontSize: { xs: 20, md: 52 }, lineHeight: 1.1 }}>
          Your Crypto Journey <br /> starts with our Pioneer
          <Typography
            color="primary"
            fontWeight="bold"
            sx={{ fontSize: { xs: 32, md: 56 }, fontFamily: 'Aldrich' }}
          >
            Unique Strategies
          </Typography>{' '}
          and{' '}
          <Typography
            component="span"
            color="primary"
            fontWeight="bold"
            sx={{ fontSize: { xs: 32, md: 56 }, mb: 3, fontFamily: 'Aldrich' }}
          >
            Development
          </Typography>
        </Typography>
      </m.div>

      <Hidden mdDown>
        <m.div variants={varFade().in}>
          <Stack
            spacing={0.75}
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ my: 3 }}
          >
            <Rating readOnly value={4.95} precision={0.1} max={5} />
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              <Box component="strong" sx={{ mr: 0.5, color: 'text.primary' }}>
                4.95/5
              </Box>
              (99+ reviews)
            </Typography>
          </Stack>
        </m.div>
      </Hidden>
      <m.div variants={varFade().in}>
        <Stack spacing={1.5} direction={{ xs: 'column-reverse', sm: 'row' }} sx={{ mb: 5 }}>
          <Stack alignItems="center" spacing={2}>
            <Button
              component={RouterLink}
              to={'/auth/register'}
              color="inherit"
              size="large"
              variant="contained"
              startIcon={<Iconify icon="eva:flash-fill" width={24} />}
              sx={{
                // bgcolor: 'grey.800',
                color: 'success.main',
                // color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
                '&:hover': {
                  bgcolor: 'text.primary',
                },
              }}
            >
              Get Start
            </Button>
          </Stack>

          <Button
            color="inherit"
            size="large"
            variant="outlined"
            startIcon={<Iconify icon="eva:external-link-fill" width={24} />}
            target="_blank"
            href="https://tg-demo-bot.vercel.app/"
            sx={{ borderColor: 'text.primary', color: 'success.main' }}
          >
            Launch App
          </Button>
        </Stack>
      </m.div>
    </StyledDescription>
  );
}
// ----------------------------------------------------------------------
