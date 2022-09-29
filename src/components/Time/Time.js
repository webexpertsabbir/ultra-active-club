import { useEffect, useState } from 'react';
import './Time.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
 import { ToastContainer, toast } from 'react-toastify';



const notify = () => toast("congratulation");

const Time = (props) => {
const {time} = props;

// console.log(brackTime.e);

let totalTime = 0;
for(const activite of time){
    totalTime = totalTime + activite.time;
    // console.log(totalTime);
}

const [storeTime, setStoreTime] = useState(true);

// useEffect( () => {
//     // console.log(brackTimeElement.current.innerText)
// }, [])
const brackTime = (e) =>{
    const breakTime = e.target.innerText;
   
    setStoreTime(breakTime)

    let breackTime = {breakTime};
    localStorage.setItem("breackTime", JSON.stringify(breackTime))
}

const getStoreTime = () =>{
    
    let breackTime = {};
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('breackTime');
   
    breackTime = JSON.parse(storedCart);
    
    return breackTime;
}
useEffect(()=>{
    const storeTime = getStoreTime();
    // console.log(storeTime)
    const savedTime = storeTime.breakTime;

    // console.log(savedTime)
    
    setStoreTime(savedTime);
},[])

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
                <a><span onClick={(e) => brackTime(e)}>15</span>s</a>
                <a><span onClick={(e) => brackTime(e)}>20</span>s</a>
                <a><span onClick={(e) => brackTime(e)}>30</span>s</a>
                <a><span onClick={(e) => brackTime(e)}>40</span>s</a>
            </div>
            <h2>Exercise Details</h2>
            <div className='exercise-time'>
                <h3>Exercise Details</h3>
                <p>{totalTime} <span>Scound</span></p>
            </div>
            <div className='exercise-break-time'>
                <h3>Break time</h3>
                <p>{storeTime} <span>Scound</span></p>
            </div>

            <button onClick={notify} className='add-to-list-btn'>Activity Completed</button> <ToastContainer />
        </div>
    );
};

export default Time;