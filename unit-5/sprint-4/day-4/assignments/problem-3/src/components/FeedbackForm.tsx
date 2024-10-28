import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Input, Textarea, Button } from '@chakra-ui/react';
import { ADD_FEEDBACK } from '../redux/actions/feedbackActions';

const FeedbackForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', email: '', rating: 0, feedback: '' });

  const handleSubmit = () => {
    if (form.name && form.email && form.rating && form.feedback) {
      dispatch({ type: ADD_FEEDBACK, payload: form });
      setForm({ name: '', email: '', rating: 0, feedback: '' });
    }
  };
  
  return (
    <Box>
      <Input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <Input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <Input
        type="number"
        placeholder="Rating"
        value={form.rating}
        onChange={(e) => setForm({ ...form, rating: +e.target.value })}
      />
      <Textarea
        placeholder="Feedback"
        value={form.feedback}
        onChange={(e) => setForm({ ...form, feedback: e.target.value })}
      />
      <Button onClick={handleSubmit}>Submit Feedback</Button>
    </Box>
  );
};

export default FeedbackForm;
