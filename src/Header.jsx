import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./headers.styles";

const Header = ({ setCoordinates }) => {
  const classes = useStyles();
  const [autoComplete, setAutoComplete] = useState(null);

  const onLoadHandler = (autoComp) => setAutoComplete(autoComp);

  const onPlaceChangedHandler = () => {
    const lat = autoComplete.getPlace().geomery.location.lat();
    const lng = autoComplete.getPlace().geomery.location.lng();
    setCoordinates({ lat, lng });
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title} variant="h5">
          Travel Advisor
        </Typography>
        <Box display={"flex"}>
          <Typography className={classes.title} variant="h6">
            Explore new places
          </Typography>
          <Autocomplete
            onLoad={onLoadHandler}
            onPlaceChanged={onPlaceChangedHandler}
          >
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search.."
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
