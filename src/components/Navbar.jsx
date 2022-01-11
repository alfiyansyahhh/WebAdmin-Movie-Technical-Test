import {Link} from 'react-router-dom'
import  './css/Navbar.css'

const Navbar = () => {
    return(
        <div>
            <div className="navbar">
                <Link className='test' to="/"> Home</Link>
                <Link className='test' to="/Genre"> Genre</Link>
                <Link className='test' to="/ListMovie"> ListMovie</Link>
                <Link className='test' to="/DetailMovie/1"> DetailMovie</Link>  
            </div>    
        </div>
    )
}

export default Navbar;