import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-assembler.firebaseio.com/",
});

export default instance;
