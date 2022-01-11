import axios from 'axios'
import Get from '../helpers/env'

const Genre = {
            
    ACTION_GET_GENRES : () => {  
        return (dispatch) => {
            dispatch({
                type: `${Get.Genres_Pending}`
            })

            axios.get(`${Get.API_URL}/genre/movie/list?api_key=${Get.API_KEY}`)
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
    },

}

export default Genre

