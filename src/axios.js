import axios from "axios";

const instance = axios.create({
    baseURL: 'http://engine.hotellook.com/api/v2/lookup.json?query=moscow&lang=ru&lookFor=both&limit=1',
});
export { instance}
