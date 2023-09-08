import './SplitButton.css';
import MuscleListJson from '../../assets/muscle_list.json';
import AllExcercisesJson from '../../assets/all_excercises.json';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SplitButtonTarget({ setData, setCurrentPage, setCurrentFilter }: { setData : any, setCurrentPage: any, setCurrentFilter: any }){

    const navigate = useNavigate();

    function Capitalize(str: string){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const changeParams = (path: string) => {
        console.log(path);
        navigate(`?filter=${path}`);
    }
    
    const handleFilterClickTarget = (data : string) => {
        setCurrentFilter(Capitalize(data));
        const filteredData = AllExcercisesJson.filter((item) =>
            item.target.toLowerCase().includes(data.toLowerCase())
        );
        setData(filteredData);
        setCurrentPage(1);
    };

    return(
        <div className="split_button">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" id='btn-primary-lighter' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Target
                </button>
                <ul className="dropdown-menu">
                    {MuscleListJson.map((muscle) => {
                        return(
                            <>
                                <li><a className="dropdown-item" id='region' key={muscle} onClick={() => {handleFilterClickTarget(muscle); changeParams(muscle)}}>{Capitalize(muscle)}</a></li>
                            </>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SplitButtonTarget;