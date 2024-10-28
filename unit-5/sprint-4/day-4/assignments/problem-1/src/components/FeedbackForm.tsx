import React, { useState } from 'react';

interface FeedbackFormData {
  name: string;
  email: string;
  rating: number | '';
  comments: string;
}

const FeedbackForm: React.FC = () => {
  const [formData, setFormData] = useState<FeedbackFormData>({
    name: '',
    email: '',
    rating: '',
    comments: ''
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'rating' ? parseInt(value) : value,
    });
  };

  const isFormValid = (): boolean => {
    return formData.name !== '' && formData.email !== '' && formData.rating !== '' && formData.comments !== '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) {
      setErrorMessage('Please fill out all fields.');
    } else {
      setIsSubmitted(true);
      setErrorMessage('');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      rating: '',
      comments: ''
    });
    setIsSubmitted(false);
  };

  return (
    <div>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label>Rating (1-5):</label>
            <input
              type="number"
              name="rating"
              value={formData.rating || ''}
              onChange={handleInputChange}
              min="1"
              max="5"
              required
            />
          </div>

          <div>
            <label>Feedback:</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

          <button type="submit">Submit Feedback</button>
        </form>
      ) : (
        <div>
          <h2>Feedback Confirmation</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Rating:</strong> {formData.rating}</p>
          <p><strong>Comments:</strong> {formData.comments}</p>

          <button onClick={handleReset}>Submit Another Feedback</button>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
