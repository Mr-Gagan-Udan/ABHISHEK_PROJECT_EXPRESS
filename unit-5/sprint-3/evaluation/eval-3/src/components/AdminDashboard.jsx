import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, banUser } from '../actions/userActions';
import { fetchBooks } from '../actions/bookActions';
import { Button } from '@chakra-ui/react';
import { Pie } from 'react-chartjs-2';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const books = useSelector(state => state.books.books);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleBan = (userId) => {
    dispatch(banUser(userId));
  };

  const availableBooks = books.filter(book => !book.isBorrowed).length;
  const borrowedBooks = books.length - availableBooks;

  const bookAvailabilityData = {
    labels: ['Available', 'Borrowed'],
    datasets: [{
      data: [availableBooks, borrowedBooks],
      backgroundColor: ['#36A2EB', '#FF6384']
    }]
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Button onClick={() => handleBan(user.id)} colorScheme="red">Ban User</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Book Availability</h3>
      <Pie data={bookAvailabilityData} />
    </div>
  );
};

export default AdminDashboard;