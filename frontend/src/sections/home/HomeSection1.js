import { m } from 'framer-motion';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, Stack, Button } from '@mui/material';
// components
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------
const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function HomeMinimal() {
  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Stack
          spacing={3}
          sx={{
            mb: { xs: 5, md: 10 },
          }}
        >
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            alignItems={{ xs: 'flex-start', md: 'center' }}
          >
            <Typography flex={1} variant="h2">
              Subscribe to our <br />
              <Typography variant="h1" component="span" color="primary">
                unique, monthly{' '}
              </Typography>{' '}
              Trading Bot
            </Typography>
            <Stack spacing={3}>
              <Typography flex={1} sx={{ pl: { xs: 0, md: 10 } }}>
                - 100% Self custody control of your API keys & Funds
              </Typography>
              <Typography flex={1} sx={{ pl: { xs: 0, md: 10 } }}>
                - 100% Success in your trading performance
              </Typography>
              <Typography flex={1} sx={{ pl: { xs: 0, md: 10 } }}>
                - 100% tested Bulletproof
              </Typography>
              <Typography flex={1} sx={{ pl: { xs: 0, md: 10 } }}>
                - 24/7 Full Consultant and Technical Support
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Stack alignItems="center" sx={{ position: 'relative', width: 1 }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          width="100%"
          style={{ position: 'absolute', opacity: 0.5, bottom: 40, left: 0 }}
        >
          <source src="/assets/videos/hero.mp4" />
        </video>
        <m.div
          animate={{
            y: [-20, 0, -20],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Box
            component="img"
            src="/assets/images/section1.png"
            sx={{ mx: { xs: 0, md: 20 }, mt: 5, position: 'relative' }}
          />
        </m.div>
      </Stack>
    </StyledRoot>
  );
}
