import {Link} from 'react-router-dom'
import  './css/Navbar.css'

const Navbar = () => {
    return(
        <div className='navbar'>
            <h3 className='judul'>STREAMING</h3>
            <div className="nav">
                <Link className='nav-li' to="/"> Home</Link>
                <Link className='nav-li' to="/Genre"> Genre</Link>
            </div>    
        </div>
    )
}

export default Navbar;