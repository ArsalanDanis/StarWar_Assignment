import './dashBoard.css'
import viewgrid from '../assets/Viewgrid.png'
import viewlist from '../assets/Viewlist.png'
import menu from '../assets/Menu.png'
import FilmReel from '../assets/FilmReel.png'
import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react'

const FilmContents = ({ data }) => {
  const [show, setShow] = useState(true);

  console.log(data);

  return (
    <div className="content">
      <div className="heading">
        <h3>Films</h3>
        <div className="toggle">
          <div style={{cursor:'pointer'}} className="grid" onClick={() => setShow(true)}>
            <div>
              <img src={viewgrid} alt="" />
            </div>
            <div style={{ color: 'grey', marginBottom: '3px' }}>Grid</div>
          </div>
          <div style={{cursor:'pointer'}} className="list" onClick={() => setShow(false)}>
            <img src={viewlist} alt="" />
          </div>
        </div>
      </div>
      {show ? (
        <div className="cardBox">
          {data.map((film, index) => (
            <Link
              to={`/filmdetails/${index}`}
              className="card"
              key={index}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="Image">
                <img
                  src={`https://picsum.photos/354/160?random=${index}`}
                  alt=""
                  height={'160px'}
                  width={'354px'}
                  style={{ borderRadius: '8px', backgroundColor: 'white' }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
              <div className="titels">
                <div className="names">
                  <div>
                    <img src={FilmReel} alt="" />
                  </div>
                  <div style={{ marginLeft: '10px' }}>{film.title}</div>
                </div>
                <div>
                  <img src={menu} alt="" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <table
          style={{ color: 'white', borderCollapse: 'collapse', width: '90%', border: '1px solid white' }}
        >
          <thead>
            <tr>
              <th style={{ padding: '10px', border: '1px solid white' }}>Image</th>
              <th style={{ padding: '10px', border: '1px solid white' }}>Title</th>
              <th style={{ padding: '10px', border: '1px solid white' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((film, index) => (
              <tr key={index}>
                <td style={{ padding: '10px', border: '1px solid white' }}>
                  <img
                    src={`https://picsum.photos/354/160?random=${index}`}
                    alt=""
                    height={'160px'}
                    width={'354px'}
                    style={{ borderRadius: '8px', backgroundColor: 'white' }}
                  />
                </td>
                <td style={{ padding: '10px', border: '1px solid white' }}>{film.title}</td>
                <td style={{ padding: '10px', border: '1px solid white', textAlign: 'center' }}>
                  <Link
                    to={`/filmdetails/${index}`}
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

export default FilmContents;
