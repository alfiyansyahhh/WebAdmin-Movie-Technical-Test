const Get = {
    API_URL : process.env.REACT_APP_API_URL,
    API_KEY : process.env.REACT_APP_API_KEY,

    Movies_Pending : 'GET_ALL_MOVIES_PENDING',
    Movies_Fulfilled : 'GET_ALL_MOVIES_FULFILLED',
    Movies_Rejected : 'GET_ALL_MOVIES_REJECTED',
    
    Movie_Pending : 'GET_ALL_MOVIE_PENDING',
    Movie_DetailFulfilled : 'GET_DETAIL_MOVIE_FULFILLED',
    Movie_DetailRejected : 'GET_DETAIL_MOVIE_REJECTED',
    
    Genres_Pending : 'GET_ALL_GENRES_PENDING',
    Genres_Fulfilled : 'GET_ALL_GENRES_FULFILLED',
    Genres_Rejected : 'GET_ALL_GENRES_REJECTED',
}

export default Get