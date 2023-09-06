import Header from "../../components/Header/Header";
import SlideBar from "../../components/SlideBar/SlideBar";
import NavBar from "../../components/NavBar/NavBar";
import ExcercisesContainer from "../../components/ExcercisesContainer/ExcercisesContainer";
import './FreeSearch.css';

function FreeSearch(){
    return(
        <div className="free_search">
            <SlideBar/>
            <ExcercisesContainer/>
        </div>
    );
}

export default FreeSearch;