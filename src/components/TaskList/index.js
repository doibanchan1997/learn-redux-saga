import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import styles from "./styles";
import TaskItem from "./../TaskItem";
import { withStyles } from "@material-ui/styles";

const TaskList = (props) => {
  const { classes, taskList, status, onClickEdit, onClickDelete } = props;
  
  return (
    <Grid item md={4} xs={12} key={status.value}>
      <Box mt={3} mb={3}>
        <div className={classes.status}>{status.label}</div>
      </Box>
      <div className={classes.wrapperListTask}>
        {taskList.map((task) => {
          return <TaskItem task={task} status={status}  key ={task.id} onClickEdit={()=> onClickEdit(task)}
          onClickDelete={()=> onClickDelete(task)}/>;
        })}
      </div>
    </Grid>
  );
};
export default withStyles(styles)(TaskList);
