import React from 'react'
import { BtnList, StyledButton } from './FeedbackOptions.styled';

export const FeedbackOptions = (props) => {
    const { options, leaveFeedback } = props;
  return (
    <BtnList> {options.map(option => <li key={option}><StyledButton onClick={() => leaveFeedback(option)}>{option}</StyledButton></li>)}
    </BtnList>
  )
}
