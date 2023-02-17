import { m } from 'framer-motion';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, Stack, Button } from '@mui/material';
// components
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------
const StyledRoot = styled('div')(({ theme }) => ({
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
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography variant="h2">
              Demo Heading your new <br />
              Section{' '}
              <Typography variant="h2" component="span" color="primary">
                Here 00
              </Typography>
            </Typography>
          </m.div>
          <m.div variants={varFade().inDown}>
            <Box component="img" src="/assets/images/interface.png" sx={{ width: 1, mt: 5 }} />
          </m.div>
        </Stack>
      </Container>
    </StyledRoot>
  );
}
