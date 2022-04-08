import {instance} from "../axios";

async function axiosHotels(args) {

    const results = await instance.get(``, {
        params: {


        }
    })
    const data  = results.data.results
    // console.log(results.data.results)

    console.log(data)
    return data
}

export default axiosHotels
