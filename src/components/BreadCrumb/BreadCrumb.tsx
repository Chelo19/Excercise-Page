import { Link } from 'react-router-dom';
import './BreadCrumb.css';

function BreadCrumb({ regionParam, filterParam, targetParam }: { regionParam: any, filterParam: any, targetParam: any }){
    
    function Capitalize(str: string){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return(
        <nav aria-label="breadcrumb" id="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to={`/freesearch?filter=${regionParam}`} id='breadcrumb_individual_item'>{Capitalize(regionParam)}</Link></li>
                <li className="breadcrumb-item active"><Link to={`/freesearch?filter=${filterParam}`} id='breadcrumb_individual_item'>{Capitalize(filterParam)}</Link></li>
                <li className="breadcrumb-item active"><Link to={`/freesearch?filter=${targetParam}`} id='breadcrumb_individual_item'>{Capitalize(targetParam)}</Link></li>
            </ol>
        </nav>
    );
}

export default BreadCrumb;