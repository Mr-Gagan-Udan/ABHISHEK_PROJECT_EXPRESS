import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Feedback {
    name: string;
    email: string;
    rating: number;
    comments: string;
}

interface FeedbackContextType {
    feedback: Feedback;
    setFeedback: React.Dispatch<React.SetStateAction<Feedback>>;
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

export const FeedbackProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [feedback, setFeedback] = useState<Feedback>({ name: '', email: '', rating: 0, comments: '' });

    return (
        <FeedbackContext.Provider value={{ feedback, setFeedback }}>
            {children}
        </FeedbackContext.Provider>
    );
};

export const useFeedback = () => {
    const context = useContext(FeedbackContext);
    if (!context) {
        throw new Error('useFeedback must be used within a FeedbackProvider');
    }
    return context;
};
