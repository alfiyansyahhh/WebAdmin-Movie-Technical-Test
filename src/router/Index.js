import {Routes, Route} from "react-router-dom"
import Home from '../pages/Home';
import Genre from "../pages/Genre";
import ListMovie from "../pages/ListMovie";
import DetailMovie from "../pages/DetailMovie.jsx"

const Router = () =>{
    return (
    <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/listmovie" element={<ListMovie />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/detailmovie/:id" element={<DetailMovie />} />
    </Routes>
    );
}
export default Router