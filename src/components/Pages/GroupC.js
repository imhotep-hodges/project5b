import React from 'react';

function GroupC(props) {
    return (
            <div className="ques">
                <h2>Question {props.current} of {props.total}  </h2> 
            </div>
        
    );
}


export default GroupC;