import axios from 'axios'
import Get from '../helpers/env'
import {API_URL,API_KEY } from '../../utils'


export const ACTION_GET_GENRES = () => {  
    return (dispatch) => {
        dispatch({
            type: `${Get.Genres_Pending}`
        })

        axios.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}`)
        .then((response) => {
            dispatch({
                type: `${Get.Genres_Fulfilled}`,
                payload: response.data.genres
            })
        }).catch((err) =>{
            dispatch({
                type: `${Get.Genres_Rejected}`,
                payload: "Terjadi Kesalahan"
            })
        })
    }
}



