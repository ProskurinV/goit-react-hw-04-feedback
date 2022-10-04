import PropTypes from 'prop-types';
// import shortid from 'shortid';

import { BtnList, FeedbackBtn, Btn } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <BtnList>
      {options.map(option => {
        return (
          <FeedbackBtn key={option}>
            <Btn type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </Btn>
          </FeedbackBtn>
        );
      })}
    </BtnList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
