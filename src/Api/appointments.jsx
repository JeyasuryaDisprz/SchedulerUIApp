import axios from "axios";

export default axios.create({
    baseURL : "http://localhost:5169/api/v1"
})