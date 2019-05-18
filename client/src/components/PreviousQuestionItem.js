
import React from 'react'
import { Item } from 'semantic-ui-react'

const PreviousQuestionItem = props => {

  return (
    <Item>
      <Item.Content>
        {props.num}. {props.question.question}
        <Item.Content>
        <br/>
          {props.question.correct_answer}
        </Item.Content>
      </Item.Content>
    </Item>
  )
}

export default PreviousQuestionItem
