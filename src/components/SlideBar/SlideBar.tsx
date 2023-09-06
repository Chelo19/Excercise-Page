import { useState } from 'react';
import './SlideBar.css';
import AllExcercisesJson from '../../assets/all_excercises.json';
import AllBodyPartsJson from '../../assets/body_parts.json';

function SlideBar({ setData }: { setData : any }){

    const handleFilterClick = (data : string) => {
    
        const filteredData = AllExcercisesJson.filter((item) =>
            item.bodyPart.toLowerCase().includes(data.toLowerCase())
        );
        setData(filteredData);
    };

    return(
        <div className='slide_bar'>
            <div className='slide_bar_container'>
                {AllBodyPartsJson.map((item) => {
                    return(
                        <div className='slide_bar_item' onClick={() => handleFilterClick(`${item}`)}>{item}</div>
                    )
                })}
            </div>
        </div>
    );
}

export default SlideBar;