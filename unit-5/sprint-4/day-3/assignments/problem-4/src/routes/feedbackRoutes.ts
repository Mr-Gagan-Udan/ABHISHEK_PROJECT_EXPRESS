import { Router } from 'express';
import Feedback from '../models/feedbackModel';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).send('Feedback saved');
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

router.get('/', async (req, res) => {
  try {
    const feedbackList = await Feedback.find();
    res.json(feedbackList);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

export default router;
