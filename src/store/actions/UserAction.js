import store from 'store';
import APIService from "services/api.service";
import api from "config/api";
export const addUser = async (data,callback) => {
  // const res = await APIService.submitData(api.createUser.url, data);
  // if(res.success){
    store.dispatch({
	    type: 'ADD_USER',
	    payload: data
	  });

	  callback(true);
  // }
	
};