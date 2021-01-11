import axios from "axios";

 const Axios = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-type": "application/json"
    
  },
  timeout: 5000,
});





export default Axios;