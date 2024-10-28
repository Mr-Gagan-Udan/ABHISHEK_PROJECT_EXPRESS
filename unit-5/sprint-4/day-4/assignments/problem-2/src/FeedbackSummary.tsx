import React from 'react';
import { useFeedback } from './Back';
import { Link } from 'react-router-dom';

const FeedbackSummary: React.FC = () => {
    const { feedback } = useFeedback();

    return (
        <div>
            <h2>Feedback Summary</h2>
            <p>Name: {feedback.name}</p>
            <p>Email: {feedback.email}</p>
            <p>Rating: {feedback.rating}</p>
            <p>Comments: {feedback.comments}</p>
            <Link to="/">Back to Form</Link>
        </div>
    );
};

export default FeedbackSummary;
