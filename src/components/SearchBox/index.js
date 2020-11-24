import React from "react";
import styles from './styles';
import { withStyles } from "@material-ui/styles";
import TextField from '@material-ui/core/TextField';
const SearchBox = (props) => {
  const { classes, handleChange } = props;
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          autoComplete="off"
          className={classes.TextField}
          label="search"
          onChange={handleChange}
          placeholder="nhap tu khoa muon tim"
        />
      </form>
    </div>
  );
};
export default withStyles(styles)(SearchBox);
