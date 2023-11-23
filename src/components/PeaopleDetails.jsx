import './Details.css'
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const PeopleDetailsPage = ({ data }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const Index = parseInt(id, 10);

    // Check if the ID is a valid index and if the film data exists
    if (isNaN(Index) || Index < 0 || Index >= data.length || !data[Index]) {
        return <div>Invalid People ID</div>;
    }

    const people = data[Index];

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className='description'>
            <div className="detailing">


                <div className="top">
                    <h2>Peoples Details</h2> <button onClick={goBack} style={{ cursor: 'pointer', background: 'none', border: 'none', fontSize: '1.5rem', color: '#007BFF' }}>
                        X
                    </button>
                </div>
                <p>Image</p>
                <img className='largeImage' src={`https://picsum.photos/800/400?random=${Index}`} alt={people.title} style={{ width: '100%', borderRadius: '8px' }} />
                <p>Title</p>
                <p style={{ backgroundColor: 'white', borderRadius: '10px', color: 'blue', padding: '10px', margin: '10px' }}>{people.name}</p>
                <p>People Hair colors</p>
                <p style={{ backgroundColor: 'white', borderRadius: '10px', color: 'blue', padding: '10px', margin: '10px' }}>{people.hair_color}</p>
                <p>Gender</p>
                <p style={{ backgroundColor: 'white', borderRadius: '10px', color: 'blue', padding: '10px', margin: '10px' }}>{people.gender}</p>
                <button onClick={goBack} style={{ border: 'none', width: '900px', marginTop: '10px', padding: '12px 16px', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#CB1A80', color: 'white' }}>
                    Close
                </button>

            </div>
        </div>
    );
};

export default PeopleDetailsPage;