import {Routes, Route} from "react-router-dom"
import DetailMovie from "../pages/DetailMovie.jsx"
import ListMovie from '../pages/ListMovie'
import Genre from '../pages/Genre'

const Router = () =>{
    return (
    <Routes>
        <Route path="/" element={<ListMovie />} exact/>
        <Route path="/detailmovie/:id" element={<DetailMovie />} />
        <Route path="/Genre" element={<Genre />} />
    </Routes>
    );
}
export default Router