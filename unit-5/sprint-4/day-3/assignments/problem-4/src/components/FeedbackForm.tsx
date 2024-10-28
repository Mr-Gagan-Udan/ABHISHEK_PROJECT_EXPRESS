import React, { useState } from 'react';
import axios from 'axios';

interface Feedback {
  name: string;
  email: string;
  rating: number;
  comments: string;
}

const FeedbackForm: React.FC = () => {
  const [feedback, setFeedback] = useState<Feedback>({
    name: '',
    email: '',
    rating: 0,
    comments: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/feedback', feedback);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting feedback', error);
    }
  };

  return (
    <div>
      {submitted ? (
        <p>Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={feedback.name} onChange={handleChange} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={feedback.email} onChange={handleChange} required />
          </div>
          <div>
            <label>Rating (1-5):</label>
            <input type="number" name="rating" value={feedback.rating} onChange={handleChange} min="1" max="5" required />
          </div>
          <div>
            <label>Comments:</label>
            <textarea name="comments" value={feedback.comments} onChange={handleChange} required></textarea>
          </div>
          <button type="submit">Submit Feedback</button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
