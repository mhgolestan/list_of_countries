import React from "react";
import Weather from "./Weather";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    spacing: 20,
    height: 140,
  },
}));

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
      <div>
        {countriesToShow.map((country, i) => (
          <Card className={classes.root} key={i}>
            <CardActionArea>
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
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => handleClick(country.name)}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    );
  }
};

export default CountriesList;
