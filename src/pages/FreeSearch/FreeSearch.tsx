import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import SlideBar from "../../components/SlideBar/SlideBar";
import NavBar from "../../components/NavBar/NavBar";
import SplitButton from "../../components/SplitButton/SplitButton";
import ExcercisesContainer from "../../components/ExcercisesContainer/ExcercisesContainer";
import './FreeSearch.css';
import AllExcercisesJson from '../../assets/all_excercises.json';
import { useState } from "react";


function FreeSearch(){
    const [data, setData] = useState(AllExcercisesJson);
    return(
        <div className="free_search">
            <SearchBar setData={setData}/>
            {/* <SlideBar setData={setData}/> */}
            <SplitButton/>
            <ExcercisesContainer data={data}/>
        </div>
    );
}

export default FreeSearch;