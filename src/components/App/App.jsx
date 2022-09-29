// import { Box } from '../Box';
import { Component } from 'react';
import Section from 'components/Section';
import { MainBox } from './App.styled';
import Notification from 'components/Notification';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {}

  countPositiveFeedbackPercentage() {}

  render() {
    return (
      <MainBox>
        <Section title="Please, leave feedback">
          <FeedbackOptions />
          <Statistics title="Statistics" />
          <Notification />
        </Section>
      </MainBox>
    );
  }
}
