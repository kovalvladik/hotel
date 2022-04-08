import axios from "axios";

const instance = axios.create({
    baseURL: 'http://engine.hotellook.com/api/v2/lookup.json',
});
export { instance}
