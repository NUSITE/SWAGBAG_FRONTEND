import axios from "axios";

// const nodeUrl = () => {
//     if (window.origin.includes("localhost")) {
//         return "http://localhost:3200/"
//     } else {
//         return "https://swagbag-node-app.herokuapp.com/"
//     }
// }


const httpAxios = axios.create({
    baseURL: window.origin.includes("localhost") ? "http://localhost:3200/" : "https://swagbag-node-app.herokuapp.com/",
    headers: {
        "x-access-token": `${localStorage.getItem("token")}`
    }
})
export default httpAxios;