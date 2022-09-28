import React from 'react';
import './Time.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';


const Time = () => {
    return (
        <div>
            <div className='user-dtl'>
                <img src="https://wpdevsabbir.com/wp-content/uploads/2022/06/Sabbir-Hossen-Logo.jpg" alt="" />
                <div>
                    <h2>Sabbir Hossen</h2>
                    <p> <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>Dinajpur, BD</p>
                </div>
            </div>
            <div className='user-body-info'>
                <div>
                    <h2>50<sub className='sub'>kg</sub></h2>
                    <p>Weight</p>
                </div>
                <div>
                    <h2>5.6</h2>
                    <p>Height</p>
                </div>
                <div>
                    <h2>21<sub className='sub'>yrs</sub></h2>
                    <p>Age</p>
                </div>
            </div>

            <h2>Add A Break</h2>
            <div className='break-time'>
                <a>15<span>s</span></a>
                <a>20<span>s</span></a>
                <a>25<span>s</span></a>
                <a>30<span>s</span></a>
            </div>
            <h2>Exercise Details</h2>
            <div className='exercise-time'>
                <h3>Exercise Details</h3>
                <p>00 <span>Scound</span></p>
            </div>
            <div className='exercise-break-time'>
                <h3>Break time</h3>
                <p>00 <span>Scound</span></p>
            </div>

            <button className='add-to-list-btn'>Activity Completed</button>
        </div>
    );
};

export default Time;