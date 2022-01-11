import Navbar from '../components/Navbar'
import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import genre from '../redux/actions/ListGenre'

const Genre = () => {

    const dispatch = useDispatch()
    const ListGenre = useSelector((state) => state.Genre)

    useEffect(() => {
        dispatch(genre.ACTION_GET_GENRES())
    }, []) 

    return(
        <div>
            <Navbar/>
            <h1>Genre</h1>
            {ListGenre.loadAll===true?(
                <div>
                    loading
                </div>
            ):(
                <div>
                    {ListGenre.all.map((e) => {
                        return(
                            <div>
                                {e.id}-{e.name}
                            </div>
                        )
                    })}
                </div>
            )}

            
        </div>
    )
}

export default Genre;