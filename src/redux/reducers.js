
const defaultState = {
    catalog:[],
    city: 'moscow',
    date: Date.now(),
    days: 1,
    like:[],
    liked: 0,
    email: null,

}


export const GET_CATALOG = "GET_CATALOG"
export const FETCH_CATALOG = "FETCH_CATALOG"
export const LIKED = "LIKED"
export const DELETE_LIKE = "DELETE_LIKE"


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
                like: [...state.like,...state.catalog.filter(el=>el.id===action.payload)]
            }
        case DELETE_LIKE:
            return {
                ...state,
                like: [...state.like,...state.catalog.filter(el=>el.id!==action.payload)]

            }

        default:
            return state
    }

}

export {reducer}
export const getCatalog = (payload) =>({type:GET_CATALOG,payload})
export const fetchCatalog = () =>({type:FETCH_CATALOG})
