import React from "react";
import LastCountry from "./LastCountry";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
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

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Chilanka", "cursive"].join(","),
  },
});

const CountriesList = ({ countriesToShow, setFilteredCountries }) => {
  const classes = useStyles();

  const handleClick = (countryName) => {
    setFilteredCountries(countryName);
  };

  if (countriesToShow.length > 100) {
    return <div></div>;
  } else if (countriesToShow.length === 1) {
    return (
      <LastCountry
        name={countriesToShow[0].name}
        capital={countriesToShow[0].capital}
        population={countriesToShow[0].population}
        languages={countriesToShow[0].languages}
        flag={countriesToShow[0].flag}
      />
    );
  } else if (countriesToShow.length > 10) {
    return (
      <Grid container justify="center">
        <ThemeProvider theme={theme}>
          <div>
            <Typography variant="h4">Too many matches</Typography>
          </div>
        </ThemeProvider>
      </Grid>
    );
  } else {
    return (
      <Grid container spacing={2}>
        {countriesToShow.map((country, i) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root} key={i}>
              <CardActionArea onClick={() => handleClick(country.name)}>
                <CardMedia
                  className={classes.media}
                  image={country.flag}
                  title={country.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h4">
                    {country.name}
                  </Typography>
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
