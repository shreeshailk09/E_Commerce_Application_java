import { Grid, Box, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import Button from "@mui/material/Button";
const DeliveryAddressForm = () => {

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Adress added")
        const data=new FormData(e.currentTarget);
        const address={
            firstName:data.get("firstname"),
            lastName:data.get("lastname"),
            StreetAddress:data.get("address"),
            city:data.get("city"),
            state:data.get("state"),
            zipCode:data.get("zipcode"),
            PhoneNumber:data.get("phonenumber")
        }
        
        console.log("address",address)
    }

  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          lg={7}
          className="border rounded-e-md shadow-md w-[30rem] min-h-[25rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "#9155fd" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={5}>
          <Box className="border rounded-s-md shadow-md p-5 ">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstname"
                    name="firstname"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastname"
                    name="lastname"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
              </Grid>
              <Grid className="pt-3" item xs={12}>
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  autoComplete="given-name"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid className="pt-3" container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
              </Grid>
              <Grid className="pt-3" container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zipcode"
                    name="zipcode"
                    label="Zip Code/Postal Code"
                    fullWidth
                    autoComplete="postal-code shipping"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phonenumber"
                    name="phonenumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
              </Grid>
              
                  <Button 
                    sx={{ py:1,mt: 2, bgcolor: "#9155fd" }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Deliver Here
                  </Button>
                
              
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
