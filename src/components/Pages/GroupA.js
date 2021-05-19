import React from 'react';

function GroupA(props) {
    return (
        <div className="container">
            <div className="ques">
                <h2>Question {props.current} of {props.total}  </h2> 
            </div>
        </div>
    );
}


export default GroupA;