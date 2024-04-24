import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link to="/">Pawfectfinds</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = ({ title, description }) => {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      {/* py- padding top and padding bottom */}
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom style={{ color: "#000" }}>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}


Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;