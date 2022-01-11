import axios from 'axios'
import Get from '../helpers/env'

const Genre = {
            
    ACTION_GET_MOVIES: (page) => {  
        return (dispatch) => {
            dispatch({
                type: `${Get.Movies_Pending}`
            })
            axios.get(`${Get.API_URL}/movie/upcoming?api_key=${Get.API_KEY}&page=${page}`)
            .then((response) => {
                dispatch({
                    type: `${Get.Movies_DetailFulfilled}`,
                    payload: response.data.data
                })
            }).catch((err) =>{
                dispatch({
                    type: `${Get.Movies_DetailRejected}`,
                    payload: "Terjadi Kesalahan"
                })
            })
        }
    },
    
    ACTION_GET_DETAIL_MOVIE: (id) => {  
        return (dispatch) => {
            dispatch({
                type: `${Get.Movie_Pending}`
            })
            axios.get(`${Get.API_URL}/movie/${id}?api_key=${Get.API_KEY}`)
            .then((response) => {
                dispatch({
                    type: `${Get.Movie_DetailFulfilled}`,
                    payload: response.data.data
                })
            }).catch((err) =>{
                dispatch({
                    type: `${Get.Movie_DetailRejected}`,
                    payload: "Terjadi Kesalahan"
                })
            })
        }
    },

}

export default Genre

