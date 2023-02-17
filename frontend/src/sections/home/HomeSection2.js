import { m } from 'framer-motion';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, Stack, Button, Grid } from '@mui/material';
// components
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';
import Iconify from 'components/iconify';

// ----------------------------------------------------------------------
const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

const Cards = [
  {
    icon: 'eva:swap-fill',
    title: 'Heading 01',
    text: 'Lorem ipsum dolor sit amet, consecteur adipsicing elit.',
  },
  {
    icon: 'eva:bar-chart-fill',
    title: 'Heading 02',
    text: 'Lorem ipsum dolor sit amet, consecteur adipsicing elit.',
  },
  {
    icon: 'mdi:shield-check-outline',
    title: 'Heading 03',
    text: 'Lorem ipsum dolor sit amet, consecteur adipsicing elit.',
  },
  {
    icon: 'bx:bot',
    title: 'Heading 04',
    text: 'Lorem ipsum dolor sit amet, consecteur adipsicing elit.',
  },
  {
    icon: 'ri:money-dollar-circle-fill',
    title: 'Heading 05',
    text: 'Lorem ipsum dolor sit amet, consecteur adipsicing elit.',
  },
  {
    icon: 'uil:bitcoin',
    title: 'Heading 06',
    text: 'Lorem ipsum dolor sit amet, consecteur adipsicing elit.',
  },
];

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
            <Typography flex={1} variant="h1">
              Demo heading <br /> New{' '}
              <Typography variant="h1" component="span" color="primary">
                Section{' '}
              </Typography>
              <br /> Here
            </Typography>
            <Typography flex={1} sx={{ pl: { xs: 0, md: 10 } }}>
              Lorem ipsum is simply dummy test of the printing and typesetting industry. Lorem ipsum
              is simply dummy test of the printing and typesetting industry. Lorem ipsum is simply
              dummy test of the printing and typesetting industry. Lorem ipsum is simply dummy test
              of the printing and typesetting industry.
            </Typography>
          </Stack>
          <m.div variants={varFade().inDown}>
            <Stack mt={5}>
              <Grid container spacing={3}>
                {Cards.map((item, index) => (
                  <Grid item md={4} key={index}>
                    <Stack sx={{ bgcolor: '#1d1a27', borderRadius: 3, p: 3, pb: 5 }} spacing={3}>
                      <Stack
                        alignItems="center"
                        justifyContent="center"
                        sx={{ bgcolor: '#4c30fc', borderRadius: 1, width: 60, height: 60 }}
                      >
                        <Iconify icon={item.icon} width={40} />
                      </Stack>
                      <Typography variant="h4">{item.title}</Typography>
                      <Typography color="text.secondary">{item.text}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={5} mt={5}>
              <Button
                sx={{
                  borderRadius: 5,
                  bgcolor: '#302c3f',
                  width: 200,
                  height: 54,
                  color: 'white',
                  border: '2px solid transparent',
                  '&:hover': { borderColor: 'primary.main' },
                }}
              >
                Button 01
              </Button>
              <Button
                sx={{
                  borderRadius: 5,
                  bgcolor: '#302c3f',
                  width: 200,
                  height: 54,
                  color: 'white',
                  border: '2px solid transparent',
                  '&:hover': { borderColor: 'primary.main' },
                }}
              >
                Button 02
              </Button>
            </Stack>
          </m.div>
        </Stack>
      </Container>
    </StyledRoot>
  );
}
