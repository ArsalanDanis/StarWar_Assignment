import "./dashBoard.css"
import starwarlogo from '../assets/starwarlogo.png'
import searchlogo from '../assets/searchlogo.png'
import folder from '../assets/FolderSimple.png'
import careRight from '../assets/CaretRight.png'
import viewgrid from '../assets/Viewgrid.png'
import viewlist from '../assets/Viewlist.png'
import menu from '../assets/Menu.png'
import FilmReel from '../assets/FilmReel.png'
import dasbordImage from '../assets/Rectangle6.svg'

import NavBar from "./navBar"
import Header from "./header"
import HomePage from "./defaultHomePage"


const DashBoard = () => {
    return (
        <>
            <div className="wrap">
                <Header />
                {/* <div className="header">
                    <div className="logo">
                        <img src={starwarlogo} alt="starwarlogo" />
                    </div>
                    <div className="searchBar">
                        <img src={searchlogo} alt="" height={'13.33px'} width={'13.33px'} />
                        <input type="text" name="" id="inpt" placeholder="Search" />
                    </div>
                </div> */}
                <div className="main">
                    <NavBar />
                    {/* <div className="menu">
                        <div className="btn">
                            <div className="btnStyle">
                                <div><img src={folder} alt="folderLogo" /><span>Films</span></div>
                                <div><img src={careRight} alt="upArrow" /></div>
                            </div>
                        </div>
                        <div className="btn"><div className="btnStyle">
                            <div><img src={folder} alt="folderLogo" /><span>People</span></div>
                            <div><img src={careRight} alt="upArrow" /></div>
                        </div></div>
                        <div className="btn"><div className="btnStyle">
                            <div><img src={folder} alt="folderLogo" /><span>Planets</span></div>
                            <div><img src={careRight} alt="upArrow" /></div>
                        </div></div>
                        <div className="btn"><div className="btnStyle">
                            <div><img src={folder} alt="folderLogo" /><span>Species</span></div>
                            <div><img src={careRight} alt="upArrow" /></div>
                        </div></div>
                        <div className="btn"><div className="btnStyle">
                            <div><img src={folder} alt="folderLogo" /><span>Starships</span></div>
                            <div><img src={careRight} alt="upArrow" /></div>
                        </div></div>
                        <div className="btn"><div className="btnStyle">
                            <div><img src={folder} alt="folderLogo" /><span>Vehicles</span></div>
                            <div><img src={careRight} alt="upArrow" /></div>
                        </div></div>
                    </div> */}



                    <HomePage />
                    {/* <div className="default">
                        <div className="defaultCard">
                            <div className="defaultcardDetails">
                                <img src={dasbordImage} alt="" style={{
                                    width: '647px',
                                    height: '218px',
                                    borderRadius: '8px'
                                }} />
                                <h1>Welcome to Star Wars Dashboard</h1>
                                <p>Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</p>
                            </div>

                        </div>
                    </div> */}







                    {/* <div className="content">
                        <div className="heading">
                            <h3>Films</h3>
                            <div className="toggle">
                                <div className="grid">
                                    <div><img src={viewgrid} alt="" /></div>
                                    <div style={{ color: 'grey', marginBottom: '3px' }}>Grid</div>
                                </div>
                                <div className="list">
                                    <img src={viewlist} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="cardBox">
                            <div className="card">
                                <div className="Image">
                                    <img src="" alt="" height={'160px'} width={'354px'} style={{ borderRadius: '8px' ,backgroundColor:'white'}} />
                                </div>
                                <div className="titels">
                                    <div className="names">
                                        <div><img src={FilmReel} alt=""  /></div>
                                        <div style={{ marginLeft: '10px' }}>Movie Name</div>
                                    </div>
                                    <div><img src={menu} alt="" /></div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="Image">
                                    <img src="" alt="" height={'160px'} width={'354px'} style={{ borderRadius: '8px' ,backgroundColor:'white'}} />
                                </div>
                                <div className="titels">
                                    <div className="names">
                                        <div><img src={FilmReel} alt=""  /></div>
                                        <div style={{ marginLeft: '10px' }}>Movie Name</div>
                                    </div>
                                    <div><img src={menu} alt="" /></div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="Image">
                                    <img src="" alt="" height={'160px'} width={'354px'} style={{ borderRadius: '8px' ,backgroundColor:'white'}} />
                                </div>
                                <div className="titels">
                                    <div className="names">
                                        <div><img src={FilmReel} alt=""  /></div>
                                        <div style={{ marginLeft: '10px' }}>Movie Name</div>
                                    </div>
                                    <div><img src={menu} alt="" /></div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="Image">
                                    <img src="" alt="" height={'160px'} width={'354px'} style={{ borderRadius: '8px' ,backgroundColor:'white'}} />
                                </div>
                                <div className="titels">
                                    <div className="names">
                                        <div><img src={FilmReel} alt=""  /></div>
                                        <div style={{ marginLeft: '10px' }}>Movie Name</div>
                                    </div>
                                    <div><img src={menu} alt="" /></div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="Image">
                                    <img src="" alt="" height={'160px'} width={'354px'} style={{ borderRadius: '8px' ,backgroundColor:'white'}} />
                                </div>
                                <div className="titels">
                                    <div className="names">
                                        <div><img src={FilmReel} alt=""  /></div>
                                        <div style={{ marginLeft: '10px' }}>Movie Name</div>
                                    </div>
                                    <div><img src={menu} alt="" /></div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="Image">
                                    <img src="" alt="" height={'160px'} width={'354px'} style={{ borderRadius: '8px' ,backgroundColor:'white'}} />
                                </div>
                                <div className="titels">
                                    <div className="names">
                                        <div><img src={FilmReel} alt=""  /></div>
                                        <div style={{ marginLeft: '10px' }}>Movie Name</div>
                                    </div>
                                    <div><img src={menu} alt="" /></div>
                                </div>
                            </div>
                            
                        </div>
                    </div> */}


                </div>
            </div>


        </>
    )
}

export default DashBoard;