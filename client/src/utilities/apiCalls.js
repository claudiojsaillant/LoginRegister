import axios from "axios";

const callBackend = (dataReturned) => {
    return axios({
      method: "get",
      url: "/backend",
      data: dataReturned
    });
}

const objectToExport = {
    callBackend

}

export default objectToExport;
 