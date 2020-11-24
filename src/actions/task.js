import { STATUS } from "../constants";
import * as taskApis from "./../apis/task";
import * as taskConstants from "./../constants/task";
export const fetchListTask = (params={}) => {
  return {
    type: taskConstants.FETCH_TASK,
    payload: {
      params
    }
  };
};

export const fetchListTaskSuccess = (data) => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
        data
    }
  };
};

export const fetchListTaskError = (error) => {
  return {
    type: taskConstants.FETCH_TASK_ERROR,
    payload: {
        error
    }
  };
};

/** 
 * B1: fectListTaskRequest().
 * B2: Reset: state task => [].
 * B3: fetchListTaskSuccess(data response).
 * B4: 
*/

export const fetchListTaskRequest = () => {
  return (dispatch) => {
    dispatch(fetchListTask());
    taskApis
      .getList()
      .then((res) => {  
          const {data} = res;
        dispatch(fetchListTaskSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchListTaskError(error));
      });
  };
};

export const filterTask = keyword =>({
  type: taskConstants.FILTER_TASK,
  payload: {
    keyword
  }
});
export const filterTaskSuccess = data => ({
  type: taskConstants.FILTER_TASK_SUCCESS,
  payload: {
    data
  }
});

export const addTask = (title, description) => {
  return {
    type: taskConstants.ADD_TASK,
    payload: {
      title,
      description
    }
  };
};

export const addTaskSuccess = (data) => {
  return {
    type: taskConstants.ADD_TASK_SUCCESS,
    payload: {
        data
    }
  };
};

export const addTaskError = (error) => {
  return {
    type: taskConstants.ADD_TASK_ERROR,
    payload: {
        error
    }
  };
};


// update Task

export const updateTask = (title, description, status = STATUS[0].value) => {
  return {
    type: taskConstants.UPDATE_TASK,
    payload: {
      title,
      description,
      status
    }
  };
};

export const updateTaskSuccess = (data) => {
  return {
    type: taskConstants.UPDATE_TASK_SUCCESS,
    payload: {
        data
    }
  };
};

export const updateTaskError = (error) => {
  return {
    type: taskConstants.UPDATE_TASK_ERROR,
    payload: {
        error
    }
  };
};


export const setTaskEditing = (task) => {
  return {
    type: taskConstants.SET_TASK_EDITING,
    payload: {
      task
    }
  }
}

//deleteTask
export const deleteTask = (taskID) => {
  return {
    type: taskConstants.DELETE_TASK,
    payload: {
      taskID
    }
  };
};

export const deleteTaskSuccess = (data) => {
  return {
    type: taskConstants.DELETE_TASK_SUCCESS,
    payload: {
        data
    }
  };
};

export const deleteTaskError = (error) => {
  return {
    type: taskConstants.DELETE_TASK_ERROR,
    payload: {
        error
    }
  };
};


