import React, { useContext } from 'react'
import { Button } from 'semantic-ui-react'
import shopContext from '../context/shop-context'

const FlashCardOptions = () => {
  const context = useContext(shopContext)

  return(
    <div>
      <Button>Previous Questions</Button>
      <Button onClick={context.handleQuestionIndex}>Next Question</Button>
    </div>
  )
}

export default FlashCardOptions