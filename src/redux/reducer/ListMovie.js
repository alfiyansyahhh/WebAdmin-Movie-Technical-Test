import Get from '../helpers/env'

const initialState = {
    all: [],
    loadAll: false, 
    errorAll: false,
    errorAllMessage: '',
    detail: [],
    loadDetail: false,
    errorDetail: false,
    errorDetailMessage: '',
}

const MovieReducer = (state=initialState, action) => {
    switch (action.type) {
        case `${Get.Movies_Pending}`:
            return {...state, loadAll: true}
        case `${Get.Movies_Fulfilled}`:
            return {...state, loadAll: false, all: action.payload}
        case `${Get.Movies_Rejected}`:
            return {...state, loadAll: false, errorAll: true, errorAllMessage: action.payload}
        
        case `${Get.Movie_Pending}`:
            return {...state, loadAll: true}
        case `${Get.Movie_DetailFulfilled}`:
            return {...state, loadDetails: false, detail: action.payload}
        case `${Get.Movie_DetailRejected}`:
            return {...state, loadDetail: false, errorDetail: true, errorDetailMessage: action.payload}
        
        default:
            return state
    }
}

export default MovieReducer