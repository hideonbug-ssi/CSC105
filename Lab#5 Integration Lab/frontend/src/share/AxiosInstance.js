import axios from 'axios';
// import Axios from'../../axios';

const Axios = axios.create({ baseURL: 'http://localhost:8000', withCredentials: true });
export default Axios;
