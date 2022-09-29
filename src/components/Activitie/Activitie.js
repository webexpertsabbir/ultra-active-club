import React from 'react';
import './Activitie.css'

const Activitie = (props) => {
    const {name, img, description, time, age} = props.activitie;
    return (
        <div className='activitie-content'>
            <img src={img} alt="" />
            <div className='activitie-text'>
                <h2>{name}</h2>
                <p>{description.slice(0, 95)} ...</p>
                <p><b>Age:</b> {age} years</p>
                <p><b>Time required:</b> {time}s</p>
            </div>
            <button onClick={()=> props.handelActivity(props.activitie)} className='add-to-list-btn'>Add to list</button>
        </div>
    );
};

export default Activitie;