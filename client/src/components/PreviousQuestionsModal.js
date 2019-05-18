import React, { useContext } from 'react'
import shopContext from '../context/shop-context'
import { Modal, Button, Item } from 'semantic-ui-react'
import PreviousQuestionItem from './PreviousQuestionItem'

const PreviousQuestionsModal = () => {
  const context = useContext(shopContext)

  return (
    <Modal open={context.modalStatus} centered={false}>
      <Modal.Header as='h2'>
        Trivia History
      </Modal.Header>
      <Modal.Content>
        <Item.Group divided={true}>
          {context.previousQuestions.map( (q, index) => <PreviousQuestionItem key={index} question={q} num={index + 1} />)}
        </Item.Group>
        <Button onClick={context.toggleModalStatus}>End Review</Button>
      </Modal.Content>
    </Modal>
  )
}

export default PreviousQuestionsModal
