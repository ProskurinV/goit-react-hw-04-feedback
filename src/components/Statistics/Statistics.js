import PropTypes from 'prop-types';
import {
  StatSection,
  StatTitle,
  StatWrapper,
  StatRes,
  StatItem,
} from './Statistics.styled';

export default function Statistics({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <StatSection>
      <StatTitle>{title}</StatTitle>
      <StatWrapper>
        <StatItem>Good: {good}</StatItem>
        <StatItem>Neutral: {neutral}</StatItem>
        <StatItem>Bad: {bad}</StatItem>
      </StatWrapper>
      <StatRes>
        <StatItem>Total feedbacks: {total}</StatItem>
        <StatItem>Positive feedback: {positivePercentage}%</StatItem>
      </StatRes>
    </StatSection>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
