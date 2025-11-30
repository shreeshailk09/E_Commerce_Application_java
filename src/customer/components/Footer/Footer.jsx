import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import Button from "@mui/material/Button";

const Footer = () => {
  return (
    
    <div className="">
        <Grid
          container
          spacing={30}
          justifyContent="center"
          sx={{
            bgcolor: "black",
            color: "white",
            textAlign: "center",
            py: 6,
            px: 4,
          }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Company
            </Typography>
            <Button
              sx={{
                display: "block",
                color: "white",
                textTransform: "none",
                mb: 1,
              }}
            >
              About
            </Button>
            <Button
              sx={{
                display: "block",
                color: "white",
                textTransform: "none",
                mb: 1,
              }}
            >
              Blog
            </Button>
            <Button
              sx={{
                display: "block",
                color: "white",
                textTransform: "none",
                mb: 1,
              }}
            >
              Jobs
            </Button>
            <Button
              sx={{
                display: "block",
                color: "white",
                textTransform: "none",
                mb: 1,
              }}
            >
              Partners
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Solutions
            </Typography>
            <Button
              sx={{
                display: "block",
                color: "white",
                textTransform: "none",
                mb: 1,
              }}
            >
              Marketing
            </Button>
            <Button
              sx={{
                display: "block",
                color: "white",
                textTransform: "none",
                mb: 1,
              }}
            >
              Analytics
            </Button>
            <Button
              sx={{
                display: "block",
                color: "white",
                textTransform: "none",
                mb: 1,
              }}
            >
              Commerce
            </Button>
            <Button
              sx={{
                display: "block",
                color: "white",
                textTransform: "none",
                mb: 1,
              }}
            >
              Support
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Documents
            </Typography>
            <Button
              sx={{
                display: "block",
                color: "white",
                textTransform: "none",
                mb: 1,
              }}
            >
              Guides
            </Button>
            <Button
              sx={{
                display: "block",
                color: "white",
                textTransform: "none",
                mb: 1,
              }}
            >
              API Status
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Legal
            </Typography>
            <Button
              sx={{
                display: "block",
                color: "white",
                textTransform: "none",
                mb: 1,
              }}
            >
              Claim
            </Button>
            <Button
              sx={{
                display: "block",
                color: "white",
                textTransform: "none",
                mb: 1,
              }}
            >
              Privacy
            </Button>
            <Button
              sx={{
                display: "block",
                color: "white",
                textTransform: "none",
                mb: 1,
              }}
            >
              Terms
            </Button>
          </Grid>
        </Grid>
        <hr/>
          <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{
            bgcolor: "black",
            color: "white",
            textAlign: "center",
            py: 6,
            px: 4,
          }}>
            <Grid className="pb-20" item xs={12}>
              <Typography className="pb-5" variant="body2" component="p" align="center">
                &copy; {new Date().getFullYear()} MyCompany. All Rights
                Reserved.
              </Typography>
              <Typography variant="body2" component="p" align="center">
                Designed with 💀 by MyCompany Team.
              </Typography>
            </Grid>
          </Grid>
      </div>
    
  );
};

export default Footer;
