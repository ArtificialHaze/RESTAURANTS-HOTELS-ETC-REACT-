import React from "react";
import {
  Box,
  Typography,
  Card,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./placedetails.styles";

const PlaceDetails = ({ item, selected, refProp }) => {
  const classes = useStyles();

  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={item.photo ? item.photo.images.large.url : ""}
        title={item.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {item.name}
        </Typography>
        <Box justifyContent={"space-between"} display={"flex"}>
          <Rating size="small" value={Number(item.rating)} readOnly />
          <Typography variant="subtitle1">
            out of {item.num_reviews} reviews.
          </Typography>
        </Box>
        <Box justifyContent={"space-between"} display={"flex"}>
          <Typography variant="subtitle1">Price</Typography>
          <Typography variant="subtitle1" gutterBottom>
            {item.price_level}
          </Typography>
        </Box>
        <Box justifyContent={"space-between"} display={"flex"}>
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography variant="subtitle1" gutterBottom>
            {item.ranking}
          </Typography>
        </Box>
        {item?.awards?.map((award, index) => (
          <Box
            my={1}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <img src={award.images.small} alt="Image" />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {item?.cuisine.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {item?.address && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {item.address}
          </Typography>
        )}
        {item?.phone && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon />
            {item.phone}
          </Typography>
        )}
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(item.web_url, "_blank")}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(item.website, "_blank")}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
