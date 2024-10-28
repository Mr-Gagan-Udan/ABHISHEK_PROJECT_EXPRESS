// src/components/FeedbackList.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Feedback {
  _id: string;
  name: string;
  email: string;
  rating: number;
  comments: string;
}

const FeedbackList: React.FC = () => {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      const response = await axios.get('http://localhost:5000/api/feedback');
      setFeedbackList(response.data);
    };
    fetchFeedback();
  }, []);

  return (
    <div>
      <h2>Feedback List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Rating</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {feedbackList.map(feedback => (
            <tr key={feedback._id}>
              <td>{feedback.name}</td>
              <td>{feedback.email}</td>
              <td>{feedback.rating}</td>
              <td>{feedback.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackList;
