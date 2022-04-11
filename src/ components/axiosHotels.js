import {instance} from "../axios";

async function axiosHotels(city) {

    const results = await instance.get(``, {
        params: {
            query:city,
            lang:'ru',
            lookFor: 'both',
            limit:'10 '
        }
    })
    const data  = results.data.results
    // console.log(results.data.results)

    return data
}

export default axiosHotels
