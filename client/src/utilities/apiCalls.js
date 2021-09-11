import axios from "axios";

const callBackend = (dataReturned) => {
    return axios({
      method: "get",
      url: "/backend",
      data: dataReturned
    });
};

const sendNewUser = (dataReturned) => {
  return axios({
    method: "post",
    url: "/user",
    data: dataReturned
  });
}

const objectToExport = {
    callBackend,
    sendNewUser
}

export default objectToExport;
 