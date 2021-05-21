import React, {useState} from 'react';
import '/Users/larryh1981/project05/src/index.css'
import Progress1 from '/Users/larryh1981/project05/src/components/Pages/QnAs/Progress1';
import Question1 from '/Users/larryh1981/project05/src/components/Pages/QnAs/Question1';
import Answer1b from '/Users/larryh1981/project05/src/components/Pages/QnAs/Answer1b';

function GroupA() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [answers, setAnswers] = useState([]);
    const [error, setError] = useState('');
    const [showResults, setShowResults] = useState(false);

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
        setError('');

    }; 

    const renderError = () => {
        if (!error) {
            return;
        } 
        return <div className="error">  {error} </div>;
    };

    const renderResultMark = (question, answer) => {
        if (question.correct_answer === answer.answer) {
            return <span className='correct'> Correct </span>;
        }
        return <span className='fail'> Wrong Answer </span>;
    };


    const renderResultsData = () => {
        return answers.map( answer => {
            const question = questions.find( question => question.id === answer.questionId 
                );
                return <div key={question.id}>{question.question} - {renderResultMark(question, answer)} </div>;
              

            } 
        );

    };

    const restart = () => {
        setAnswers([]);
        setCurrentAnswer('');
        setCurrentQuestion(0);
        setShowResults(false);

    };

    const next = () => {
        const answer = {questionId:question.id, answer: currentAnswer};

        if (!currentAnswer) {
            setError('Please select an answer!');
            return;
        }

        answers.push(answer);
        setAnswers(answers);
        setCurrentAnswer('');

        if (currentQuestion +1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            return;

        }
        
        setShowResults(true);
    };

    if (showResults) {
        return (
            <div className='container text-center py-4' id='results'>
                    <h2> Results </h2>
                    <ul>{renderResultsData()}</ul>
                <button className='btn btn-secondary btn-sm' onClick={restart} >
                    Restart Quiz
                </button>
                <br />
                <br />
                <br />
                <br />
            </div>
        )
    } else {

        return (
            <div className="container text-center">
            
      
                <Progress1 total={questions.length} current={currentQuestion + 1} /> 
                <br />
                <Question1 question={question.question} />
                <p id='error'> {renderError()} </p>
                <br />
                <Answer1b question={question} currentAnswer={currentAnswer} handleClick={handleClick} />
                <br />
                <button className='btn btn-secondary btn-sm' onClick={next} >
                    Submit Answer
                </button>
                <br />
                <br />
                <br />
                <br />
            
      
            </div>
        );
    }

}



export default GroupA;

      