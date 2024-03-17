import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
  Link,
} from "@mui/material";
import { yellow } from "@mui/material/colors";

function Header() {
  return (
    <Box sx={{ flexGrow: 0, fontSize: 15, color: yellow }}>
      <AppBar
        position="static"
        sx={{
          // mr: 2,
          backgroundColor: "#292929",
          height: "70px",
        }}
      >
        {/* Set the background color to a dark color and adjust height */}
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontSize: "24px", color: "gold" }}
          >
            <Link sx={{ color: "gold", textDecoration: "none" }} href="/">
              IMDB
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
