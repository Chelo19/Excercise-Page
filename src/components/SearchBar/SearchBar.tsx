import { useState } from 'react';
import './SearchBar.css'
import AllExcercisesJson from '../../assets/all_excercises.json';
import { useNavigate } from 'react-router-dom';

function SearchBar({ setData, setCurrentPage, currentFilter, setCurrentFilter }: { setData : any, setCurrentPage: any, currentFilter:any, setCurrentFilter: any }){

    const navigate = useNavigate();

    const changeParams = (path: string) => {
        console.log(path);
        navigate(`?filter=${path}`);
    }

    const handleFilterChange = (e: React.ChangeEvent<any>) => {
        const textFilter = e.target.value;
        setCurrentFilter(textFilter);
        const filteredData = AllExcercisesJson.filter((item) =>
            item.name.toLowerCase().includes(currentFilter.toLowerCase())
        );
        changeParams(textFilter);
        setData(filteredData);
    };

    const clearFilter = () => {
        setCurrentFilter('All');
        changeParams('All');
        setData(AllExcercisesJson);
        setCurrentPage(1);
    }

    return(
        <form className="d-flex mt-3 search_bar" role="search">
            <input className="form-control me-2 focus-ring" id='form-control-primary' value={currentFilter} onChange={handleFilterChange} type="text" placeholder="Search" aria-label="Search"/>
            <div className="btn btn-outline-success" id='btn-outline-primary' onClick={clearFilter}>Clear</div>
        </form>
    );
}

export default SearchBar;