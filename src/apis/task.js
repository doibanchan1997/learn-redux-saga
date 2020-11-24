import axiosService from './../commons/axiosService'; 
import {API_ENDPOINT} from './../constants/index';
import qs from 'query-string';
import { Exposure, ExposureZero } from '@material-ui/icons';
const url = 'tasks';

//http://localhost:3000/tasks
export const getList = (params = {}) => {
    let queryParams = '';
    if(Object.keys(params).length >0){
        queryParams = `?${qs.stringify(params)}`;
    }
    return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
}; 
//http://localhost:3000/tasks
export const addTask = (data) => {
    return axiosService.post(`${API_ENDPOINT}/${url}`, data)
}

//http://localhost:3000/tasks/:id METHOD: PUT
export const  updateTask = (data, taskId) => {
    return axiosService.put(`${API_ENDPOINT}/${url}/${taskId}`, data)
}

export const deleteTask = (taskId) => {
    return axiosService.put(`${API_ENDPOINT}/${url}/${taskId}`);
}