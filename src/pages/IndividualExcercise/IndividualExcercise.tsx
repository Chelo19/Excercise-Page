import { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import './IndividualExcercise.css';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

function IndividualExcercise(){

    const searchParams = new URLSearchParams(location.search);

    const [regionParam, setRegionParam] = useState(searchParams.get('region'));
    const [filterParam, setFilterParam] = useState(searchParams.get('filter'));
    const [targetParam, setTargetParam] = useState(searchParams.get('target'));

    return(
        <div className="individual_excercise">
            <BreadCrumb regionParam={regionParam} filterParam={filterParam} targetParam={targetParam}/>
        </div>
    );
}

export default IndividualExcercise;