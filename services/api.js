import axios from "axios";

const url = "http://localhost"
const api = axios.create({
  baseURL: url,
});

export function URLAPI() {
    return url;
}

export default api;
// export {URLAPI};