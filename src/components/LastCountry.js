import React from "react";
import Weather from "./Weather";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const LastCountry = ({ name, capital, population, languages, flag }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} alignItems="center" justify="center">
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={flag}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <h2>Languages:</h2>
            <ul>
              {languages.map((language, i) => (
                <li key={i}>{language.name}</li>
              ))}
            </ul>
            <Weather city={capital} />
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default LastCountry;
