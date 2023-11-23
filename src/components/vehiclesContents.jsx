import './dashBoard.css'
import viewgrid from '../assets/Viewgrid.png'
import viewlist from '../assets/Viewlist.png'
import menu from '../assets/Menu.png'
import FilmReel from '../assets/FilmReel.png'
import React from 'react';
import { Link } from 'react-router-dom'

const VehiclesContents = ({ data }) => {
  console.log(data);

  return (
    <div className="content">
      <div className="heading">
        <h3>Vehicles</h3>
        <div className="toggle">
          <div className="grid">
            <div>
              <img src={viewgrid} alt="" />
            </div>
            <div style={{ color: 'grey', marginBottom: '3px' }}>Grid</div>
          </div>
          <div className="list">
            <img src={viewlist} alt="" />
          </div>
        </div>
      </div>
       <div className="cardBox">
        {data.map((vehicles, index) => (
          <Link to={`/vecdetails/${index}`}  className="card" key={index}>
            <div className="Image">
              <img onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')} src={`https://picsum.photos/354/160?random=${index*9}`} alt="" height={'160px'} width={'354px'} style={{ borderRadius: '8px', backgroundColor: 'white' }} />
            </div>
            <div className="titels">
              <div className="names">
                <div>
                  <img src={FilmReel} alt="" />
                </div>
                <div style={{ marginLeft: '10px' }}>{vehicles.name}</div>
              </div>
              <div>
                <img src={menu} alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div> 
      
    </div>
  );
};

export default VehiclesContents;