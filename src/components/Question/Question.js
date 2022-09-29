import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <h1 className='title'>Answer to the Question</h1>
            <div>
                <h2><b>Q1:</b> How does React work?</h2>
                <p><b>Ans:</b> React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process. In fancy words, React does batch updates. So putting all pieces together, Reconciliation = Render + Diffing occurs in between + Commit.</p>
            </div>
            <div>
                <h2><b>Q2:</b> What is the difference between props and state?</h2>
                <p><b>Ans:</b> Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
            </div>
            <div>
                <h2><b>Q3:</b> What is done with useEffect?</h2>
                <p><b>Ans:</b> The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.</p>
            </div>
            <h3>© All Right Reserved</h3>
        </div>
    );
};

export default Question;