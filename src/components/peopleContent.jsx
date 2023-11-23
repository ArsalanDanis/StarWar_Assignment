import './dashBoard.css'
import viewgrid from '../assets/Viewgrid.png'
import viewlist from '../assets/Viewlist.png'
import menu from '../assets/Menu.png'
import FilmReel from '../assets/FilmReel.png'
import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react'

const PeaopleContents = ({ data }) => {
  console.log(data);
  const [show, setShow] = useState(true)
  return (
    <div className="content">
      <div className="heading">
        <h3>Peoples</h3>
        <div className="toggle">
          <div tyle={{ cursor: 'pointer' }} onClick={() => setShow(true)} className="grid">
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
      {show ? (<div className="cardBox">
        {data.map((people, index) => (
          <Link to={`/peopledetails/${index}`} className="card" key={index}>
            <div className="Image">
              <img onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')} src={`https://picsum.photos/354/160?random=${index * 17}`} alt="" height={'160px'} width={'354px'} style={{ borderRadius: '8px', backgroundColor: 'white' }} />
            </div>
            <div className="titels">
              <div className="names">
                <div>
                  <img src={FilmReel} alt="" />
                </div>
                <div style={{ marginLeft: '10px' }}>{people.name}</div>
              </div>
              <div>
                <img src={menu} alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>) : (<table
        style={{ color: 'white', borderCollapse: 'collapse', width: '90%', border: '1px solid white' }}
      >
        <thead>
          <tr>
            <th style={{ padding: '10px', border: '1px solid white' }}>Image</th>
            <th style={{ padding: '10px', border: '1px solid white' }}>Name</th>
            <th style={{ padding: '10px', border: '1px solid white' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((people, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', border: '1px solid white' }}>
                <img
                  src={`https://picsum.photos/354/160?random=${index * 17}`}
                  alt=""
                  height={'160px'}
                  width={'354px'}
                  style={{ borderRadius: '8px', backgroundColor: 'white' }}
                />
              </td>
              <td style={{ padding: '10px', border: '1px solid white' }}>{people.name}</td>
              <td style={{ padding: '10px', border: '1px solid white', textAlign: 'center' }}>
                <Link
                  to={`/peopledetails/${index}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <span
                    style={{
                      marginLeft: '5px',
                      fontSize: '14px',
                      height: '50px',
                      width: '50px',
                      backgroundColor: 'white',
                      color: 'black',
                      borderRadius: '25px',
                    }}
                  >
                    →
                  </span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}

    </div>
  );
};

export default PeaopleContents;