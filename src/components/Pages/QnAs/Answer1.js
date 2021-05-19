import React from 'react';

function Answer1(props) {

    return (
        <button value={props.letter} >  
            <span className="answer"> {props.letter}. </span> {props.answer}
        
        </button>

    );

}

export default Answer1;