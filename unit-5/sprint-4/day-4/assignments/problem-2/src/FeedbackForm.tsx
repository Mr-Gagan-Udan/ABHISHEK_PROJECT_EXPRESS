import React, { useState } from 'react';
import { useFeedback } from './Back';
import { useHistory } from 'react-router-dom';

const FeedbackForm: React.FC = () => {
    const { feedback, setFeedback } = useFeedback();
    const [error, setError] = useState<string>('');
    const history = useHistory();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFeedback((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = (): boolean => {
        if (!feedback.name || !feedback.email || feedback.rating <= 0 || !feedback.comments) {
            setError('All fields are required.');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            history.push('/summary');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Feedback Form</h2>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={feedback.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={feedback.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Rating:</label>
                <input type="number" name="rating" value={feedback.rating} onChange={handleChange} required min="1" max="5" />
            </div>
            <div>
                <label>Comments:</label>
                <textarea name="comments" value={feedback.comments} onChange={handleChange} required />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Submit Feedback</button>
        </form>
    );
};

export default FeedbackForm;
