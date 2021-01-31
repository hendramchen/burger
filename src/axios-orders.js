import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-f1dc9-default-rtdb.firebaseio.com/",
});

export default instance;
