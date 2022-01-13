/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from '../components/Navbar'
import { useEffect, useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ACTION_GET_MOVIES } from '../redux/actions/ListMovie'
import './css/ListMovie.css'
import {Row, Col} from 'reactstrap';
import Pagino from "pagino";
import { useNavigate } from 'react-router-dom';

const ListMovie = () => {

    const dispatch = useDispatch()
    const ListMovies= useSelector((state) => state.ListMovie)


    useEffect(() => {
        dispatch(ACTION_GET_MOVIES(1))
    }, [])


    const [pages, setPages] = useState([]);

    const pagino = useMemo(() => {
        const _ = new Pagino({
        onChange: (page, count) => setPages(_.getPages()) 

        });

        _.setCount(20);

        return _;
    }, []);

    const hanglePaginoNavigation = (type) => {
        if (typeof type === "string") {
        pagino[type]?.();
        return;
        }

        pagino.setPage(type);
    };

    const renderElement = (page) => {
        if (page === "start-ellipsis" || page === "end-ellipsis") {
        return <button className='pagination1' key={page}>...</button>;
        }

        return (
        <button className='pagination1'
            style={{
            backgroundColor: page === pagino.page ? "#0971f1" : ""
            ,color: page === pagino.page? "white":""
            }}
            key={page}
            onClick={() => hanglePaginoNavigation(page)}
        >
            {page}
        </button>
        );
    };

    useEffect(() => {
        dispatch(ACTION_GET_MOVIES(pagino.page))
    }, [pagino.page]) 


    const navigate = useNavigate()
    const detail = (id) => {
        navigate(`/detailmovie/${id}`)
    }

    return(
        <div>
            <Navbar/>

            <div className='mt-3'>
                <ul>{pages.map(renderElement)}</ul>
            </div>

            {ListMovies.loadAll===true?(
               <div>loading</div>
            ):(
                <Row className='list-card'>
                    {ListMovies.all.map((e)=>{
                        return(
                            <Col lg="3" md="3" xs="6" className="cardd"> 
                                <img onClick={() => detail(e.id)} className="poster" src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}/>             
                            </Col>
                        )
                    })}
                </Row>
            )}               
        </div>
    )
}

export default ListMovie;