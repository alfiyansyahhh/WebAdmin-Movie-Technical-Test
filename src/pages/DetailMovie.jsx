import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ACTION_GET_DETAIL_MOVIE } from '../redux/actions/ListMovie'
import {Row, Col} from 'reactstrap';
import './css/DetailMovie.css'

const DetailMovie = () => {

    const params = useParams()
    const id = params.id
    const dispatch = useDispatch()
    const ListMovie= useSelector((state) => state.ListMovie)

    const Movies = ListMovie.detail

    useEffect(() => {     
        dispatch(ACTION_GET_DETAIL_MOVIE(id))
    }, [])


    return(
        <div>
            <Navbar/>
            
            <Row className='p-5'>
                <Col>
                    {ListMovie.loadDetail===true?(<>loading</>):(
                        <img className="poster_detail" src={`https://image.tmdb.org/t/p/w500/${Movies.poster_path}`}/>
                    )}
                </Col>
                <Col>
                    <h3>{Movies.original_title}</h3>
                    <div className='ket-detail'>
                        <div>{Movies.overview}</div>
                        <div className='mt-5'>budget: {Movies.budget}</div>
                        <div>original_language: {Movies.original_language}</div>
                        <div>original_title: {Movies.original_title}</div>
                        <div>popularity: {Movies.popularity}</div>
                        <div>release_date: {Movies.release_date}</div>
                        <div>revenue: {Movies.revenue}</div>
                        <div>runtime: {Movies.runtime}</div>
                        <div>status: {Movies.status}</div>
                        <div>tagline: {Movies.tagline}</div>
                        <div>vote_average:{Movies.vote_average}</div>
                        <div>vote_count: {Movies.vote_count}</div>
                    </div>
                </Col>
            </Row> 
        
                            
        </div>
    )
}

export default DetailMovie;