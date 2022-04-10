

let today = new Date();
const defaultState = {
    catalog:[],
    city: 'moscow',
    year: today.getFullYear(),
    month: today.getMonth(),
    day: today.getDate(),
    days: 1,
    like:[],
    liked: 0,
    email: null,
    enteredDays:1

}


export const GET_CATALOG = "GET_CATALOG"
export const FETCH_CATALOG = "FETCH_CATALOG"
export const LIKED = "LIKED"
export const DELETE_LIKE = "DELETE_LIKE"
export const UPDATE_DATE = "UPDATE_DATE"
export const DAYS = "DAYS"
export const CITY = "CITY"
export const UPDATE_CATALOG = "UPDATE_CATALOG"



const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_CATALOG:
            return {
                ...state,
                catalog: action.payload
            }
        case LIKED:
            return {
                ...state,
                like: [ ...state.like,...state.catalog.filter(el=>el.id==action.payload)]
            }
        case DELETE_LIKE:
            return {
                ...state,
                like:state.like.filter(el=>el.id!==action.payload)
            }
        case UPDATE_DATE:
            return {
                ...state,

                month: action.payload.month1,
                day: action.payload.day1,
                year: action.payload.year1
            }
        case DAYS:
            return {
                ...state,
                days: action.payload
            }
        case CITY:
            return {
                ...state,
                city: action.payload
            }
        case UPDATE_CATALOG:
            return {
                ...state,
                catalog: action.payload
            }

        default:
            return state
    }

}

export {reducer}
export const getCatalog = (payload) =>({type:GET_CATALOG,payload})
export const liked = (payload) =>({type:LIKED,payload})
export const deleteLike = (payload) =>({type:DELETE_LIKE,payload})
export const updateDate = (payload) =>({type:UPDATE_DATE,payload})
export const updateDays = (payload) =>({type:DAYS,payload})
export const updateCity = (payload) =>({type:CITY,payload})
export const updateCatalog = (payload) =>({type:UPDATE_CATALOG,payload})
