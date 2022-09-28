import { Box } from '../Box';
import { Component } from 'react';
import Section from 'components/Section/Section';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Box bg="muted" color="text">
        <div>
          <Section title="Please, leave feedback" />
        </div>
      </Box>
    );
  }
}
