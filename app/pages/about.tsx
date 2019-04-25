import * as React from "react";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import {Typography} from "@material-ui/core";
import MuiLink from '@material-ui/core/Link';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Material-UI
      </MuiLink>
      {' team.'}
    </Typography>
  );
}

export default function App() {

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v4-alpha with TypeScript example
        </Typography>
        <Link href="/">Go to the main page</Link>
        <ProTip />
        <MadeWithLove />
      </Box>
    </Container>
  );
}
