import Navbar from '../components/Navbar'
import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {ACTION_GET_GENRES} from '../redux/actions/ListGenre'
import {Row, Col} from 'reactstrap';
import './css/Genre.css'

const Genre = () => {

    const dispatch = useDispatch()
    const ListGenre = useSelector((state) => state.Genre)

    useEffect(() => {
        dispatch(ACTION_GET_GENRES())
    }, []) 

    return(
        <div>
            <Navbar/>
            {ListGenre.loadAll===true?(
                <div>
                    loading
                </div>
            ):(
                <Row className='mt-5 p-5'>
                    {ListGenre.all.map((e) => {
                        return(                        
                            <Col lg="3" md="3" xs="6"  ><div className='card2'>{e.name}</div></Col>                        
                        )
                    })}
               </Row>
            )}

            
        </div>
    )
}

export default Genre;