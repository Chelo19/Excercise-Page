import { useState } from "react";
import BodyPartsByRegionJson from '../../assets/body_parts_by_region.json';
import MuscleListJson from '../../assets/muscle_list.json';
import './NavBar.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function NavBar(){
    const navigate = useNavigate();

    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState('');

    // const [term, setTerm] = useState('');
    // const [filteredData, setFilteredData] = useState(data);
  
    // const handleInputChange = (event) => {
    //   const searchTerm = event.target.value;
    //   setTerm(searchTerm);
  
    //   // Filtrar el JSON según el término de búsqueda
    //   const filtered = data.filter((item) =>
    //     item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    //   );
    //   setFilteredData(filtered);
    // };

    function Capitalize(str: string){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return(
        <nav className="navbar bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Excercise</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`offcanvas offcanvas-end ${isOffCanvasOpen}`} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" id="nav_bar_list">
                        <li className="nav-item">
                            <a className="nav-link active" id="nav_link_inherit" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="nav_link_inherit" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="nav_link_inherit" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            By Body Part
                        </a>
                        <ul className="dropdown-menu">
                        {BodyPartsByRegionJson.map((region) => {
                            return(
                                <>
                                    <li><Link to={`/freesearch?filter=${region.name}`} className="dropdown-item" id='region' key={region.name}>{region.name}</Link></li>
                                    {region.bodyParts?.map((bodyPart) => {
                                        return(
                                            <>
                                                <li><Link to={`/freesearch?filter=${bodyPart}`} className="dropdown-item bod_part" id='body_part' key={bodyPart}>&nbsp;&nbsp;&nbsp;{Capitalize(bodyPart)}</Link></li>
                                            </>
                                        );
                                    })}
                                    <li><hr className="dropdown-divider"/></li>
                                </>
                            );
                        })}
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="nav_link_inherit" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            By Target Muscle
                        </a>
                        <ul className="dropdown-menu">
                            {MuscleListJson.map((muscle) => {
                            return(
                                <>
                                    <li key={muscle}><Link to={`/freesearch?filter=${muscle}`} className="dropdown-item" id='region'>{Capitalize(muscle)}</Link></li>
                                </>
                            );
                            })}
                        </ul>
                    </li>
                    </ul>
                    <form className="d-flex mt-3" role="search">
                        <input className="form-control me-2 focus-ring" id="form-control-primary" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" id="btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;