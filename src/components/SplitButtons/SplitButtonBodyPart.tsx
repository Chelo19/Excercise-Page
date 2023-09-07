import './SplitButton.css';
import BodyPartsByRegionJson from '../../assets/body_parts_by_region.json';
import AllExcercisesJson from '../../assets/all_excercises.json';
import { useState } from 'react';

function SplitButtonBodyPart({ setData, setCurrentPage, setCurrentFilter }: { setData : any, setCurrentPage: any, setCurrentFilter: any }){

    function Capitalize(str: string){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const handleFilterClickRegion = (filters: string[]) => {
        if (Array.isArray(filters)) {
            let filteredData = AllExcercisesJson;
            let finalData: any[] = [];
            filters.forEach((data) => {
                filteredData = AllExcercisesJson.filter((item) =>
                    item.bodyPart.toLowerCase().includes(data.toLowerCase())
                );
                finalData = finalData.concat(filteredData);
            });
            setData(finalData);
            setCurrentPage(1);
        } else {
        }
        
    };
    
    const handleFilterClickBodyPart = (data : string) => {
        setCurrentFilter(Capitalize(data));
        const filteredData = AllExcercisesJson.filter((item) =>
            item.bodyPart.toLowerCase().includes(data.toLowerCase())
        );
        setData(filteredData);
        setCurrentPage(1);
    };

    return(
        <div className="split_button">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" id='btn-primary-lighter' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Body Part
                </button>
                <ul className="dropdown-menu">
                    {BodyPartsByRegionJson.map((region) => {
                        return(
                            <>
                                <li><a className="dropdown-item" id='region' key={region.name} href="#" onClick={() => {handleFilterClickRegion(region.bodyParts); setCurrentFilter(Capitalize(region.name))}}>{region.name}</a></li>
                                {region.bodyParts?.map((bodyPart) => {
                                    return(
                                        <>
                                            <li><a className="dropdown-item bod_part" id='body_part' key={bodyPart} href="#" onClick={() => handleFilterClickBodyPart(`${bodyPart}`)}>&nbsp;&nbsp;&nbsp;{Capitalize(bodyPart)}</a></li>
                                        </>
                                    );
                                })}
                                <li><hr className="dropdown-divider"/></li>
                            </>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SplitButtonBodyPart;