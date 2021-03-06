import React, { useCallback, useEffect } from 'react'
import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi'
import { ToastMessage, useToast } from '../../../hooks/toast'
import { Container } from './style'

interface ToastProps {
  message: ToastMessage
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />
}
export const Toast: React.FC<ToastProps> = ({message}) => {
  const { removeToast } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id)
    },3000);

    return () => {
      clearTimeout(timer);
    }

  },[message.id, removeToast])

  const handleRemoveToast = useCallback((id: string) => {
    removeToast(id)
  }, [removeToast])
  return(
    <Container type={message.type} hasDescription={!!message.description}>
      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
        <button onClick={() => handleRemoveToast(message.id)} type="button">
          <FiXCircle size={18}/>
        </button>
      </div>
    </Container> 
    
  )
}