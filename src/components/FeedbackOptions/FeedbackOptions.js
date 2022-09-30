// import PropTypes from 'prop-types';
import shortid from 'shortid';

import { BtnList, FeedbackBtn, Btn } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <BtnList>
      {options.map(option => {
        return (
          <FeedbackBtn key={shortid.generate()}>
            <Btn type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </Btn>
          </FeedbackBtn>
        );
      })}
    </BtnList>
  );
}
