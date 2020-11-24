import { Box, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from "redux-form";
import renderTextField from "../../components/TextField";
import * as modalActions from './../../actions/modal';
import * as taskActions from './../../actions/task';
import styles from "./styles";
import validate from './validate';
const TaskForm = (props) => {
  const {taskActionCreaters, modalActionCreaters, taskEditing} = props;
  const {hideModal} = modalActionCreaters;
 
  const  handleSubmitForm = data =>{
    const {addTask, updateTask} = taskActionCreaters;
    const {title, description, status} = data;
    if(taskEditing && taskEditing.id){
      updateTask(title, description, status)
    }
    else {
      addTask(title, description)
    }
  }
  const { classes, handleSubmit } = props;
  
  const rederSeclect   = () => {
    let xhtml = null;
    xhtml = (
      <div>
        <label>Status</label>
        <div>
          <Field name="status" component="select">
            <option />
            <option value={0}>READY</option>
            <option value={1}>IN PROGRESS</option>
            <option value={2}>COMPLETED</option>
          </Field>
        </div>
      </div>
    )
    return xhtml;
  }
  
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
            <Grid container className={classes.root} spacing={2}>
              <Grid item md={12}>
                <Field
                className={classes.textfield}
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                name='title'
                component={renderTextField}
                />
                <Field
                  className={classes.textfield}
                  autoFocus
                  margin="dense"
                  id="name"
                  label="description"
                  type="text"
                  fullWidth
                  name="description"
                  component={renderTextField}
                />
               {
                taskEditing ? rederSeclect() : ''
               }
              </Grid>
              
              <Grid>
                <Box display="flex" flexDirection="row-reverse" pt={2}>
                  <Box ml={1}>
                    <Button
                      variant="contained"
                      color="secondary"
                      color="primary"
                      type="submit"
                      onClick={hideModal} 
                    >
                      Cancel
                    </Button>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Ok
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
  );
};

const mapStateToProps = state =>{
  return {
    taskEditing: state.task.taskEditing,
    initialValues: state.task.taskEditing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      modalActionCreaters: bindActionCreators(modalActions, dispatch),
      taskActionCreaters:  bindActionCreators(taskActions, dispatch) 
    }
  }

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const FORM_NAME = 'TASK_MANAGEMENT'
const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate
})
export default compose(
  withConnect,
  withStyles(styles),
  withReduxForm,
)(TaskForm)