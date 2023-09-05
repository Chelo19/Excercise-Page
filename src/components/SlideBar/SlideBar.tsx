import './SlideBar.css';

function SlideBar(){
    return(
        <div className='slide_bar'>
            <div className='slide_bar_container'>
                <div className='slide_bar_item'>Upper Body</div>
                <div className='slide_bar_item'>Lower Body</div>
                <div className='slide_bar_item'>Cardio</div>
            </div>
        </div>
    );
}

export default SlideBar;