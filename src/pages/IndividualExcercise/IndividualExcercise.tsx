import { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import './IndividualExcercise.css';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import AllExcercisesJson from '../../assets/all_excercises.json';
import ExcerciseDisplay from "../../components/ExcerciseDisplay/ExcerciseDisplay";
import SmallCards from "../../components/SmallCards/SmallCards";

function IndividualExcercise(){

    const searchParams = new URLSearchParams(location.search);

    const [excerciseId, setExcerciseId] = useState(searchParams.get('id'));
    const [excercise, setExcercise] = useState<any>(null);
    const [imgStyle, setImgStyle] = useState('');

    const filterJson = () => {
        if(excerciseId != null){
            const currentExcercise = AllExcercisesJson.filter((item) =>
                item.id.toLowerCase().includes(excerciseId.toLowerCase())
            );
            setExcercise(currentExcercise[0]);
        }
    }

    useEffect(() => {
        filterJson();
    }, []);

    function Capitalize(str: string){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return(
        <>
        {excercise ?
            <div className="individual_excercise">
                <BreadCrumb excercise={excercise}/>
                <span className="individual_excercise_title">{Capitalize(excercise.name)}</span>
                <div className="individual_excercise_background">
                    <img src={`../../../gifs/${excercise.gifUrl}.gif`} />
                </div>
                <div className={`individual_excercise_container`}>
                    <ExcerciseDisplay excercise={excercise}/>
                    <SmallCards excercise={excercise}/>
                </div>
            </div>
            :
            <>
            </>
        }
        </>
    );
}

export default IndividualExcercise;