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

const Products = [
  {
    title: 'Product 01',
    subTitle: 'Trading Bot 01',
    text: 'This is product 1 which will be released in March 2023.',
  },
  {
    title: 'Product 02',
    subTitle: 'Trading Bot 02',
    text: 'This is product 2 which will be released in March 2023.',
  },
  {
    title: 'Product 03',
    subTitle: 'Trading Bot 03',
    text: 'This is product 3 which will be released in March 2023.',
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
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography variant="h2">
              Demo{' '}
              <Typography variant="h2" component="span" color="primary">
                Heading
              </Typography>
            </Typography>
          </m.div>
          <m.div variants={varFade().inDown}>
            <Typography>
              Lorem ipsum is simply dummy text of the prinitng and typesetting industry.
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Stack mt={10}>
              <Grid container spacing={3}>
                {Products.map((item, index) => (
                  <Grid item key={index} md={4}>
                    <Stack
                      alignItems="center"
                      sx={{
                        py: 10,
                        borderRadius: 3,
                        background: 'linear-gradient(#ffffff10, #000000)',
                        pt: 10,
                      }}
                    >
                      <Stack sx={{ px: 4 }} alignItems="center" spacing={2}>
                        <Iconify icon="ic:sharp-star" width={40} color="primary.main" />
                        <Typography variant="h4" color="primary">
                          {item.title}
                        </Typography>
                        <Typography variant="h5" color="primary.light">
                          {item.subTitle}
                        </Typography>
                        <Typography>{item.text}</Typography>
                        <Button
                          color="primary"
                          variant="contained"
                          sx={{ borderRadius: 5, width: 160, height: 48, color: 'white', mt: 3 }}
                        >
                          Learn More
                        </Button>
                      </Stack>
                      <Box
                        component="img"
                        src={`/assets/images/product${index + 1}.png`}
                        sx={{ width: 1, mt: 10 }}
                      />
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </m.div>
        </Stack>
      </Container>
    </StyledRoot>
  );
}
