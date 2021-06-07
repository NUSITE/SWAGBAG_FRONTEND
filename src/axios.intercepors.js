import axios from "axios";

const httpAxios = axios.create({
    baseURL: "http://localhost:3200/",
    headers: {
        "x-access-token": `${localStorage.getItem("token")}`
    }
})
export default httpAxios;