import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

const ShortListedCountries = (id, handleClick) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} key={i}>
        <CardActionArea onClick={handleClick}>
          <CardMedia className={classes.media} image={country.flag} title="?" />
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
    </div>
  );
};

export default ShortListedCountries;
