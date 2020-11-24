import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/styles";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { STATUS } from "../../constants";
import TaskForm from "../TaskForm";
import * as modalActions from "./../../actions/modal";
import * as taskAction from "./../../actions/task";
import SearchBox from "./../../components/SearchBox";
import TaskList from "./../../components/TaskList";
import styles from "./styles";

function Taskboard(props) {
  // const [open, setOpen] = useState(false);
  useEffect(() => {
    const { taskAction } = props;
    const { fetchListTaskRequest, deleteTask } = taskAction;
    fetchListTaskRequest();
  }, []);
  const { classes } = props;

  const handleClickOpen = () => {
    const { taskAction } = props;
    const { setTaskEditing } = taskAction;
    setTaskEditing(null)
    const {modalAction} = props;
    const{showModal, changeModalTitle, changeModalContent} = modalAction;
    showModal();
    changeModalTitle('Thêm mới công việc');
    changeModalContent(<TaskForm/>);
  };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  const handleEditTask = (task) => {
    const { taskAction } = props;
    const { setTaskEditing } = taskAction;
    setTaskEditing(task)
    const {modalAction} = props;
    const{showModal, changeModalTitle, changeModalContent} = modalAction;
    showModal();
    changeModalTitle('Sua Cong Viec');
    changeModalContent(<TaskForm/>);
  }
  const handleDeleteTask = (task)=> {
    const { taskAction } = props;
    const {   deleteTask } = taskAction;
    deleteTask(task.id)
  }

  var renderBoard = () => {
    const { listTask } = props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUS.map((status, index) => {
          const listFiltered = listTask.filter(
            (task) => status.value === task.status
          );
          return (
            <TaskList
              taskList={listFiltered}
              status={status}
              key={listTask.id}
              onClickEdit = {handleEditTask}
              onClickDelete = {handleDeleteTask}

            />
          );
        })}
      </Grid>
    );
    return xhtml;
  };

  // const renderForm = () => {
  //   let xhtml = null;
  //   xhtml = <TaskForm handleClose={handleClose} open={open}></TaskForm>;
  //   return xhtml;
  // };listTask
  const handleFilter = (e) => {
    const { value } = e.target;
    const { taskAction } = props;
    const { filterTask } = taskAction;
    filterTask(value);
  };

  const searchBox = () => {
    let xhtml = null;
    xhtml = <SearchBox handleChange={handleFilter} />;
    return xhtml;
  };

  return (
    <div className={classes.taskboard}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleClickOpen}
      >
        <AddIcon /> Thêm mới công việc
      </Button>
      {searchBox()}
      {renderBoard()}
      {/* {renderForm()} */}
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    listTask: state.task.listTask,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    taskAction: bindActionCreators(taskAction, dispatch),
    modalAction: bindActionCreators(modalActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Taskboard)
);
