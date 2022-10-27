import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: `black` }}>
      <Toolbar style={{ display: `flex`, justifyContent: `space-between` }}>
        <Button component={Link} to="/">
          <Typography
            variant="h6"
            color="white"
            sx={{ flexGrow: 1, textTransform: `none` }}
          >
            CSIC (Crypto Summer is Coming)
          </Typography>
        </Button>
        <Toolbar>
          <Button component={Link} to="/get-nft">
            <Typography
              color="white"
              sx={{ flexGrow: 1, textTransform: `none` }}
            >
              NFT 받기
            </Typography>
          </Button>
          <Button component={Link} to="/get-token">
            <Typography
              color="white"
              sx={{ flexGrow: 1, textTransform: `none` }}
            >
              토큰 교환
            </Typography>
          </Button>
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
