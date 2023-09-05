import './Header.css'

function Header(){
    return(
        <div className="header">
            <div className='header_container'>
                <div className='header_left'>
                    <div className='header_item'>M</div>
                </div>
                <div className='header_right'>
                    <div className='header_item'>F</div>
                    <div className='header_item'>D</div>
                </div>
            </div>
        </div>
    );
}

export default Header;