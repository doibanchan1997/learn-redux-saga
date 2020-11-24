import {
  call,
  delay,
  fork,
  put,
  select,
  take,
  takeEvery,
  takeLatest
} from "redux-saga/effects";
import { hideModal } from "../actions/modal";
import { addTaskError, addTaskSuccess, deleteTaskError, deleteTaskSuccess, fetchListTask, fetchListTaskError, fetchListTaskSuccess, filterTaskSuccess, updateTaskError, updateTaskSuccess } from "./../actions/task";
import { hideLoading, showLoading } from "./../actions/ui";
import { addTask, deleteTask, getList, updateTask } from "./../apis/task";
import { STATUS, STATUS_CODE } from "./../constants";
import * as typeAction from "./../constants/task.js";

function* watchFetchListTaskAction() {
  while (true) {
    const  action = yield take(typeAction.FETCH_TASK);
    yield put(showLoading());
    const {params} = action.payload;
    const resp = yield call(getList, params);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskError(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* filterTaskSaga({ payload }) {
  yield delay(500);
  const {keyword} = payload
  yield put(fetchListTask({
    q:keyword,
  }))
//   const { keyword } = payload;
//   const list = yield select((state) => state.task.listTask);
//   const fiteredTask = list.filter((task) =>
//     task.title
//       .trim()
//       .toLowerCase()
//       .includes(keyword.trim().toLowerCase())
//   );
//  yield put(filterTaskSuccess(fiteredTask));
}

function* addTaskSaga ({payload}){
  const {title, description} = payload;
  yield put(showLoading());
  const resp = yield call(addTask, {
    title,
    description,
    status: STATUS[0].value
  });
  const {data, status} = resp;
  console.log(resp);
  if(status === STATUS_CODE.CREATE){
    yield put(addTaskSuccess(data));
    yield put(hideModal());
    
  }else{
    yield put(addTaskError(data));
  }
  yield delay(500);
  yield put(hideLoading());
  
}

function* updateTaskSaga({payload}){
  const {title, description, status} = payload;
  const taskEditing = yield select(state => state.task.taskEditing);
  yield put(showLoading());
  const resp = yield call(updateTask, {title, description, status: parseInt(status)}, taskEditing.id);
  const {data, status: statusCode} = resp;
  if(statusCode === STATUS_CODE.SUCCESS){
    yield put(updateTaskSuccess(data));
    yield put(hideModal());
  }else{
    yield put(updateTaskError(data));
  }
  yield delay(500);
  yield put(hideLoading());
}
function* deleteTaskSaga({payload}){
  const {taskID} = payload
  yield put(showLoading());
  const resp = yield call(deleteTask, taskID);
  const {data, status} = resp;
  if(status === STATUS_CODE.SUCCESS){
    yield put(deleteTaskSuccess(data));
    yield put(hideModal());
  }else{
    yield put(deleteTaskError(data));
  }
  yield delay(500);
  yield put(hideLoading());


}
  
function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(typeAction.FILTER_TASK, filterTaskSaga);
  yield takeEvery(typeAction.ADD_TASK, addTaskSaga);
  yield takeLatest(typeAction.UPDATE_TASK, updateTaskSaga);
  yield takeLatest(typeAction.DELETE_TASK, deleteTaskSaga);

}
export default rootSaga;
