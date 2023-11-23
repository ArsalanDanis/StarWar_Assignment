import './dashBoard.css'
import folder from '../assets/FolderSimple.png'
import careRight from '../assets/CaretRight.png'
import { Link, Outlet } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='wrapper'>
            <div className="menu">
                <Link to='/Films' className="btn" >
                    <div className="btnStyle">
                        <div><img src={folder} alt="folderLogo" /><span>Films</span></div>
                        <div><img src={careRight} alt="upArrow" /></div>
                    </div>
                </Link>
                <Link to='/People' className="btn">
                    <div className="btnStyle">
                        <div><img src={folder} alt="folderLogo" /><span>People</span></div>
                        <div><img src={careRight} alt="upArrow" /></div>
                    </div>
                </Link>
                <Link to='/Planets' className="btn">
                    <div className="btnStyle">
                        <div><img src={folder} alt="folderLogo" /><span>Planets</span></div>
                        <div><img src={careRight} alt="upArrow" /></div>
                    </div>
                </Link>
                <Link to='/Species' className="btn">
                    <div className="btnStyle">
                        <div><img src={folder} alt="folderLogo" /><span>Species</span></div>
                        <div><img src={careRight} alt="upArrow" /></div>
                    </div>
                </Link>
                <Link to='/Starships' className="btn">
                    <div className="btnStyle">
                        <div><img src={folder} alt="folderLogo" /><span>Starships</span></div>
                        <div><img src={careRight} alt="upArrow" /></div>
                    </div>
                </Link>
                <Link to='/Vehicles' className="btn">
                    <div className="btnStyle">
                        <div><img src={folder} alt="folderLogo" /><span>Vehicles</span></div>
                        <div><img src={careRight} alt="upArrow" /></div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NavBar
