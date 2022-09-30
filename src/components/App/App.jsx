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

  stateKeys = Object.keys(this.state);

  options = this.stateKeys;

  handleFeedbackСlick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <MainBox>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            options={this.stateKeys}
            onLeaveFeedback={this.handleFeedbackСlick}
          />

          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              title="Statistics"
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </MainBox>
    );
  }
}
