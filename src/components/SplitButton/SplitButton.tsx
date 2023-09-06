import './SplitButton.css'

function SplitButton(){
    return(
        <div className="split_button">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" id='btn-primary-lighter' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Body Part
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Upper Body</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Lower Body</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Cardio</a></li>
                </ul>
            </div>
        </div>
    );
}

export default SplitButton;