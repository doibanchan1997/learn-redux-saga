import React from "react";
import Grid from "@material-ui/core/Grid";
import IconEdit from "@material-ui/icons/Edit";
import IconDelete from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/styles";
import styles from "../../containers/App/styles";
const TaskItem = (props) => {
  const { task, status,onClickEdit, onClickDelete } = props;
  const { title } = task;
  return (
    <Card key = {task.id}> 
      <CardContent>
        <Grid container justify="space-between" >
          <Grid item md={8}>
            {title}
          </Grid>
          <Grid item md={4}>
            {status.label}
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-end"
          spacing={2}
        >
          <Grid item>
            <Button variant="contained" color="primary">
              <IconEdit onClick = {onClickEdit} />
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary">
              <IconDelete onClick = {onClickDelete}/>
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};
export default withStyles(styles)(TaskItem);
