import axios from 'axios'
import Get from '../helpers/env'
import {API_URL,API_KEY } from '../../utils'

export const ACTION_GET_MOVIES = (page) => {  
    return (dispatch) => {
        dispatch({
            type: `${Get.Movies_Pending}`
        })

        axios.get(`${API_URL}/movie/upcoming?api_key=${API_KEY}&page=${page}`)
        .then((response) => {
            dispatch({
                type: `${Get.Movies_Fulfilled}`,
                payload: response.data.results
            })
        }).catch((err) =>{
            dispatch({
                type: `${Get.Movies_Rejected}`,
                payload: "Terjadi Kesalahan"
            })
        })
    }
}
    
export const ACTION_GET_DETAIL_MOVIE = (id) => {  
    return (dispatch) => {
        dispatch({
            type: `${Get.Movie_Pending}`
        })
        axios.get(`${API_URL}/movie/${id}?api_key=${API_KEY}`)
        .then((response) => {
            dispatch({
                type: `${Get.Movie_DetailFulfilled}`,
                payload: response.data
            })
        }).catch((err) =>{
            dispatch({
                type: `${Get.Movie_DetailRejected}`,
                payload: "Terjadi Kesalahan"
            })
        })
    }
}



