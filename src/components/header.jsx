import "./dashBoard.css"
import starwarlogo from '../assets/starwarlogo.png'
import searchlogo from '../assets/searchlogo.png'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={starwarlogo} alt="starwarlogo" />
            </div>
            <div className="searchBar">
                <img src={searchlogo} alt="" height={'13.33px'} width={'13.33px'} />
                <input type="text" name="" id="inpt" placeholder="Search" />
            </div>
        </div>
    )
}

export default Header;