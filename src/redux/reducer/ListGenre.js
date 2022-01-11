import Get from '../helpers/env'

const initialState = {
    all: [],
    loadAll: false, 
    errorAll: false,
    errorAllMessage: '',
}

const GenreReducer = (state=initialState, action) => {
    switch (action.type) {
        case `${Get.Genres_Pending}`:
            return {...state, loadAll: true}
        case `${Get.Genres_Fulfilled}`:
            return {...state, loadAll: false, all: action.payload}
        case `${Get.Genres_Rejected}`:
            return {...state, loadAll: false, errorAll: true, errorAllMessage: action.payload}    
        
        default:
            return state
    }
}

export default GenreReducer