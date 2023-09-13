import { Link } from 'react-router-dom';
import './BreadCrumb.css';
import { useEffect } from 'react';
import BodyPartsByRegionJson from '../../assets/body_parts_by_region.json';

function BreadCrumb({ excercise }: { excercise: any }){
    
    function Capitalize(str: string){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    useEffect(() => {
    }, []);

    function getRegion(item: any){
        let fRegion;
        
        BodyPartsByRegionJson.forEach(region => {
            region.bodyParts.forEach(bodyPart => {
                if(bodyPart == item.bodyPart){
                    fRegion = region.name;
                }
            });
        });
        return fRegion;
    }

    return(
        <nav aria-label="breadcrumb" id="breadcrumb">
            <ol className="breadcrumb" id='breadcrumb_no_margin'>
                <li className="breadcrumb-item"><Link to={`/freesearch?filter=${getRegion(excercise)}`} id='breadcrumb_individual_item'>{getRegion(excercise)}</Link></li>
                <li className="breadcrumb-item active"><Link to={`/freesearch?filter=${excercise.bodyPart}`} id='breadcrumb_individual_item'>{Capitalize(excercise.bodyPart)}</Link></li>
                <li className="breadcrumb-item active"><Link to={`/freesearch?filter=${excercise.target}`} id='breadcrumb_individual_item'>{Capitalize(excercise.target)}</Link></li>
            </ol>
        </nav>
    );
}

export default BreadCrumb;