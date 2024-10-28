import { useSelector } from 'react-redux';
import { AppState } from '../redux/store';
import { Box, Select, Table, Tr, Td } from '@chakra-ui/react';

const FeedbackDashboard = () => {
  const feedbacks = useSelector((state: AppState) => state.feedback.feedbacks);
  const [filter, setFilter] = useState<number | null>(null);

  const filteredFeedbacks = feedbacks.filter(
    (feedback) => filter === null || feedback.rating === filter
  );

  return (
    <Box>
      <Select onChange={(e) => setFilter(+e.target.value)}>
        <option value={null}>All Ratings</option>
        <option value={1}>1 Star</option>
        <option value={2}>2 Stars</option>
        <option value={3}>3 Stars</option>
        <option value={4}>4 Stars</option>
        <option value={5}>5 Stars</option>
      </Select>

      <Table>
        {filteredFeedbacks.map((feedback, index) => (
          <Tr key={index}>
            <Td>{feedback.name}</Td>
            <Td>{feedback.rating}</Td>
            <Td>{feedback.feedback}</Td>
          </Tr>
        ))}
      </Table>
    </Box>
  );
};

export default FeedbackDashboard;
