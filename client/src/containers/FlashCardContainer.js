import React, { useContext } from 'react'
import { Card, Button } from 'semantic-ui-react'
import shopContext from '../context/shop-context'
import { isEmpty } from 'lodash'
import '../css/FlashCard.css'

const FlashCardContainer = () => {
  const context = useContext(shopContext)
  
  const answers = () => {
    if(isEmpty(context.activeQuestion)) {
      return ['', '', '', '']
    } else {
      return context.activeQuestion.shuffled_answers
    }
  }

  const checkAnswer = (answer) => {
    return answer === context.activeQuestion.correct_answer ? true : false
  }

  const handleAction = (answer) => {
    context.handleAnswered(true)
    if (checkAnswer(answer)){
      context.handleCorrectAnswer(true)
      context.incrementProgress()
    } 
  }

  const formatHTML = (text) => {
    return <span dangerouslySetInnerHTML={{__html: text}} />
  }

  return(
    context.answered ?
    <Card id="flash-card">
      <Card.Content>
        {formatHTML(context.activeQuestion.question)}
      </Card.Content>
      <Card.Content id='correct-answer-container'>
        {formatHTML(context.activeQuestion.correct_answer)}
      </Card.Content>
    </Card>
    :
    <Card id="flash-card">
      <Card.Content>
        {formatHTML(context.activeQuestion.question)}
      </Card.Content>
      <Card.Content id='card-button-container'>
        <Button id='card-button-one' inverted color='blue' onClick={() => handleAction(answers()[0])}>A {formatHTML(answers()[0])}</Button>
        <Button id='card-button-two' inverted color='red' onClick={() => handleAction(answers()[1])}>B {formatHTML(answers()[1])}</Button>
        <Button id='card-button-three' inverted color='green' onClick={() => handleAction(answers()[2])}>C {formatHTML(answers()[2])}</Button>
        <Button id='card-button-four' inverted color='teal' onClick={() => handleAction(answers()[3])}>D {formatHTML(answers()[3])}</Button>
      </Card.Content>
    </Card>
  )
}

export default FlashCardContainer
