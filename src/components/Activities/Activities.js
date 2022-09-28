import React, { useEffect, useState } from 'react';
import Activitie from '../Activitie/Activitie';
import Header from '../Header/Header';
import Time from '../Time/Time';
import './Activities.css'

const Activities = () => {

    const [activites, setActivites] = useState([]);

    useEffect( () => {
        fetch('activites.json')
        .then(res => res.json())
        .then(data => setActivites(data))
    }, [])
    return (
        <div className='activite'>
            <div className='activites-container'>
                <Header></Header>
                <h3>Select today’s exercise</h3>
                <div className='activitie-grid'>
                    {
                    activites.map(activitie => <Activitie
                        key={activitie.id}
                        activitie={activitie}
                    ></Activitie>) 
                    }
                </div>
            </div>
            <div className='user-activities'>
                <Time></Time>
            </div>
        </div>
    );
};

export default Activities;