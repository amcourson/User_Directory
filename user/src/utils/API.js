import axios from "axios";


export default {
  generate: function () {
    return axios.get("https://randomuser.me/api/?results=25")
  }
}



