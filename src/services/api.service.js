import http from "./axiosConfig";
import { NotificationManager } from "react-notifications";
class APIService {
  async get(url, paramsArray) {
    try {
      console.log("url", url);
      var res = await http.post(url);
      return Promise.resolve(res.data);
    } catch (err) {
      NotificationManager.error("Something went wrong!", "Error");
      return Promise.reject(err);
    }
  }
  async post(url, data) {
    try {
      var res = await http.post(url, data);
      return Promise.resolve(res.data);
    } catch (err) {
      NotificationManager.error("Something went wrong!", "Error");
      return Promise.reject(err);
    }
  }

  async patch(url, data) {
    try {
      var res = await http.patch(url, data);
      return Promise.resolve(res.data);
    } catch (err) {
      NotificationManager.error("Something went wrong!", "Error");
      return Promise.reject(err);
    }
  }
  async delete(url, data) {
    try {
      var res = await http.delete(url, { data: data });
      return Promise.resolve(res.data);
    } catch (err) {
      NotificationManager.error("Something went wrong!", "Error");
      return Promise.reject(err);
    }
  }
}

const objectApi = new APIService();
export default objectApi;
