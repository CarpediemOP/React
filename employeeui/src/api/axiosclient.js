import axios from "axios";
const axiosClient =axios.create({baseURL:"http://localhost:5287/api",Headers:{"Content-Type":"application/json"}});
export default axiosClient;