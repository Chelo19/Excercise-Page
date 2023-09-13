import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import SlideBar from "../../components/SlideBar/SlideBar";
import NavBar from "../../components/NavBar/NavBar";
import SplitButtonBodyPart from "../../components/SplitButtons/SplitButtonBodyPart";
import ExcercisesContainer from "../../components/ExcercisesContainer/ExcercisesContainer";
import './FreeSearch.css';
import AllExcercisesJson from '../../assets/all_excercises.json';
import { useEffect, useState } from "react";
import BodyPartsByRegionJson from '../../assets/body_parts_by_region.json';
import SplitButtonTarget from "../../components/SplitButtons/SplitButtonTarget";
import { useParams } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

function FreeSearch(){

    const navigate = useNavigate();

    // const { cFilter } = useParams();
    const searchParams = new URLSearchParams(location.search);
    const filterParam = searchParams.get('filter');

    const [data, setData] = useState(AllExcercisesJson);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentFilter, setCurrentFilter] = useState(filterParam);

    const filterJson = () => {
        if(currentFilter == 'All'){
            setData(AllExcercisesJson);
            return;
        }
        if (currentFilter != null) {
            for (const region of BodyPartsByRegionJson) {
                if (currentFilter == region.name) {
                    isRegion(region);
                    return;
                }
                for (const bodyPart of region.bodyParts) {
                    if (currentFilter == bodyPart) {
                        isBodyPart(currentFilter);
                        return;
                    }
                }
            }
            const filteredData = AllExcercisesJson.filter((item) =>
                item.target.toLowerCase().includes(currentFilter.toLowerCase())
            );
            setData(filteredData);
        }
      };

    const isRegion = (region: any) => {
        if (Array.isArray(region.bodyParts)) {
            let filtData = AllExcercisesJson;
            let finalData: any[] = [];
            region.bodyParts.forEach((data: any) => {
                filtData = AllExcercisesJson.filter((item) =>
                    item.bodyPart.toLowerCase().includes(data.toLowerCase())
                );
                finalData = finalData.concat(filtData);
            });
            setData(finalData);
            return;
        }
    }

    const isBodyPart = (currentFilter: any) => {
        const filteredData = AllExcercisesJson.filter((item) =>
            item.bodyPart.toLowerCase().includes(currentFilter.toLowerCase())
        );
        setData(filteredData);
        return;
    }

    useEffect(() => {
        filterJson();
    }, []);

    function Capitalize(str: string){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return(
        <div className="free_search">
            <SearchBar setData={setData} setCurrentPage={setCurrentPage} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter}/>
            {/* <SlideBar setData={setData}/> */}
            <div className="free_search_split_buttons">
                <SplitButtonBodyPart setData={setData} setCurrentPage={setCurrentPage} setCurrentFilter={setCurrentFilter}/>
                <SplitButtonTarget setData={setData} setCurrentPage={setCurrentPage} setCurrentFilter={setCurrentFilter}/>
            </div>
            <div className="free_search_current_filter">Showing {currentFilter} excercises</div>
            {/* <button onClick={() => console.log(currentFilter)}>Debug</button> */}
            <ExcercisesContainer data={data} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
    );
}

export default FreeSearch;