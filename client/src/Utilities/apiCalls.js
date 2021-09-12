import axios from "axios";

const sendNewUser = (data) => {
  return axios({
    method: "post",
    url: "/user",
    data: data
  });
}

const logUser = (data) => {
  return axios({
    method: "post",
    url: "/login",
    data: data
  });
}

const objectToExport = {
    sendNewUser,
    logUser
}

export default objectToExport;
 