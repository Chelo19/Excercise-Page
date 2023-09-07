import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import SlideBar from "../../components/SlideBar/SlideBar";
import NavBar from "../../components/NavBar/NavBar";
import SplitButtonBodyPart from "../../components/SplitButtons/SplitButtonBodyPart";
import ExcercisesContainer from "../../components/ExcercisesContainer/ExcercisesContainer";
import './FreeSearch.css';
import AllExcercisesJson from '../../assets/all_excercises.json';
import { useState } from "react";
import SplitButtonTarget from "../../components/SplitButtons/SplitButtonTarget";


function FreeSearch(){
    const [data, setData] = useState(AllExcercisesJson);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentFilter, setCurrentFilter] = useState('Showing All');
    return(
        <div className="free_search">
            <SearchBar setData={setData} setCurrentPage={setCurrentPage} setCurrentFilter={setCurrentFilter}/>
            {/* <SlideBar setData={setData}/> */}
            <div className="free_search_split_buttons">
                <SplitButtonBodyPart setData={setData} setCurrentPage={setCurrentPage} setCurrentFilter={setCurrentFilter}/>
                <SplitButtonTarget setData={setData} setCurrentPage={setCurrentPage} setCurrentFilter={setCurrentFilter}/>
            </div>
            <div className="free_search_current_filter">Showing {currentFilter} excercises</div>
            <ExcercisesContainer data={data} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
    );
}

export default FreeSearch;