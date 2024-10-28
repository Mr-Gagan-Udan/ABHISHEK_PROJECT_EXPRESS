import React from 'react';
import PostList from './components/PostList';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>API Data Fetch Example</h1>
            <PostList />
        </div>
    );
};

export default App;
