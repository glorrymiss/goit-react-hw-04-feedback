import { Wrap, FeedbackOption } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export function FeedbackOptions({ onLeaveFeedback, options }) {
  console.log(Object.keys(options));
  return (
    <>
      <Wrap>
        {Object.keys(options).map(option => {
          console.log(option);
          return (
            <FeedbackOption
              key={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </FeedbackOption>
          );
        })}
      </Wrap>
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};
