// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { FeedbackProvider } from './Back';
import FeedbackForm from './FeedbackForm';
import FeedbackSummary from './FeedbackSummary';

const App: React.FC = () => {
    return (
        <FeedbackProvider>
            <Router>
                    <Route path="/"  component={FeedbackForm} />
                    <Route path="/summary" component={FeedbackSummary} />
            </Router>
        </FeedbackProvider>
    );
};

export default App;
