import { useState } from 'react';
import './SearchBar.css'
import AllExcercisesJson from '../../assets/all_excercises.json';

function SearchBar({ setData, setCurrentPage, setCurrentFilter }: { setData : any, setCurrentPage: any, setCurrentFilter: any }){

    const [filter, setFilter] = useState('');

    const handleFilterChange = (e: React.ChangeEvent<any>) => {
        const textFilter = e.target.value;
        setFilter(textFilter);
        const filteredData = AllExcercisesJson.filter((item) =>
            item.name.toLowerCase().includes(filter.toLowerCase())
        );
        setData(filteredData);
    };

    const clearFilter = () => {
        setCurrentFilter('All');
        setFilter('');
        setData(AllExcercisesJson);
        setCurrentPage(1);
    }

    return(
        <form className="d-flex mt-3 search_bar" role="search">
            <input className="form-control me-2 focus-ring" id='form-control-primary' value={filter} onChange={handleFilterChange} type="text" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" id='btn-outline-primary' type="submit" onClick={clearFilter}>Clear</button>
        </form>
    );
}

export default SearchBar;