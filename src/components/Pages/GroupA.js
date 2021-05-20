import React, {useState} from 'react';
import '/Users/larryh1981/project05/src/index.css'
import Progress1 from '/Users/larryh1981/project05/src/components/Pages/QnAs/Progress1';
import Question1 from '/Users/larryh1981/project05/src/components/Pages/QnAs/Question1';
import Answer1b from '/Users/larryh1981/project05/src/components/Pages/QnAs/Answer1b';

function GroupA() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState('');

    const questions = [
        {
            id: 1,
            question: "Is this a Test?",
            answer_a: "True",
            answer_b: "False",
            answer_c: "I don't know",
            correct_answer: "a",
        },
        {
            id: 2,
            question: "Are you okay?",
            answer_a: "True",
            answer_b: "False",
            answer_c: "I don't know",
            correct_answer: "c",
        },
        {
            id: 3,
            question: "What time will I go to bed?",
            answer_a: "11:30pm",
            answer_b: "12:30am",
            answer_c: "1:30am",
            correct_answer: "b",
        },
    ];


    const question = questions [currentQuestion];

    const handleClick = e => {
        setCurrentAnswer(e.target.value)

    }; 

    return (
        <div className="container">
            
      
                <Progress1 total="3" current="1" /> 
                <br />
                <Question1 question={question.question} />
                <br />
                <Answer1b question={question} currentAnswer={currentAnswer} handleClick={handleClick} />
                <br />
                <button className='btn btn-secondary btn-sm'>
                    Submit Answer
                </button>
            
      
        </div>
    );
}





export default GroupA;

      