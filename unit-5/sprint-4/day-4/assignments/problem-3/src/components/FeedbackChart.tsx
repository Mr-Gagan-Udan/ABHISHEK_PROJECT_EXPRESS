import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { AppState } from '../redux/store';

const FeedbackChart = () => {
  const feedbacks = useSelector((state: AppState) => state.feedback.feedbacks);

  const ratingsCount = feedbacks.reduce((acc, feedback) => {
    acc[feedback.rating] = (acc[feedback.rating] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
    datasets: [
      {
        label: 'Number of Feedbacks',
        data: [ratingsCount[1] || 0, ratingsCount[2] || 0, ratingsCount[3] || 0, ratingsCount[4] || 0, ratingsCount[5] || 0],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'],
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default FeedbackChart;
