import React from "react";
import Weather from "./Weather";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
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

const CountriesList = ({ countriesToShow, setFilteredCountries }) => {
  const classes = useStyles();

  const handleClick = (countryName) => {
    setFilteredCountries(countryName);
  };

  if (countriesToShow.length === 250) {
    return <div>Insert the name of the country</div>;
  } else if (countriesToShow.length === 1) {
    return (
      <div>
        <h1>{countriesToShow[0].name}</h1>
        <p>Capital: {countriesToShow[0].capital}</p>
        <p>Population: {countriesToShow[0].population}</p>
        <h2>Languages:</h2>
        <ul>
          {countriesToShow[0].languages.map((language, i) => (
            <li key={i}>{language.name}</li>
          ))}
        </ul>
        <img src={countriesToShow[0].flag} alt="flag" />
        <Weather city={countriesToShow[0].capital} />
      </div>
    );
  } else if (countriesToShow.length > 10) {
    return <p>{"Too many matches"}</p>;
  } else {
    console.log(countriesToShow);
    return (
      <Grid container spacing={2}>
        {countriesToShow.map((country, i) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root} key={i}>
              <CardActionArea onClick={() => handleClick(country.name)}>
                <CardMedia
                  className={classes.media}
                  image={country.flag}
                  title="?"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {country.name}
                  </Typography>
                  {/*<Typography variant="body2" color="textSecondary" component="p">
                  {`dscds`}
        </Typography>*/}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
};

export default CountriesList;
