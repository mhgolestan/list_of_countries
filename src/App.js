import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CountriesList from "./components/CountriesList";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const App = () => {
  const classes = useStyles();

  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleFilteredCountries = (event) => {
    setFilteredCountries(event.target.value);
  };

  const countriesToShow = countries.filter((country) =>
    country.name.includes(filteredCountries)
  );

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          value={filteredCountries}
          onChange={handleFilteredCountries}
          id="outlined-basic"
          label="Country"
          variant="outlined"
        />
      </form>
      <CountriesList
        countriesToShow={countriesToShow}
        setFilteredCountries={setFilteredCountries}
      />
    </div>
  );
};

export default App;
