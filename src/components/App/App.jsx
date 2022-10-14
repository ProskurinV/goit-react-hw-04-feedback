// import { Box } from '../Box';
import { useState } from 'react';
import Section from 'components/Section';
import { MainBox } from './App.styled';
import Notification from 'components/Notification';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const types = { good, neutral, bad };

  const stateKeys = Object.keys(types);

  const handleUpdateFeedback = type => {
    switch (type) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  return (
    <MainBox>
      <Section title="Please, leave feedback">
        <FeedbackOptions
          options={stateKeys}
          onLeaveFeedback={handleUpdateFeedback}
        />

        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            title="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </MainBox>
  );
}
