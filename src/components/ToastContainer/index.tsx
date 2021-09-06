import React from 'react'
import { ToastMessage } from '../../hooks/toast'
import { Toast } from './Toast'
import { Container } from './style'

interface ToastContainerProps {
  messages: ToastMessage[]
}


export const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {

  return(
    <Container>
      {
        messages.map((message) => 
          <Toast key={message.id} message={message} />
        )
      }
    </Container>

  )
}