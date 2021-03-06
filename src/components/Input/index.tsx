import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { Container, Error } from './style';
import {useField } from '@unform/core'
import { useRef } from 'react';
import { useCallback } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  icon:React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({name,icon: Icon, ...rest}) => {

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const {fieldName, defaultValue, error, registerField} = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
    
    setIsFilled(!!inputRef.current?.value) // representa o if acima
  },[])

  return(
    <Container isErrored={ !!error} isFilled={isFilled} isFocused={isFocused}>
    {Icon && <Icon size={20}/>}
    <input 
    onFocus={()=>setIsFocused(true)} 
    onBlur={handleInputBlur}  
    defaultValue={defaultValue} 
    ref={inputRef} {...rest}
    />
        {error && 
         <Error title={error}>
           <FiAlertCircle color="#c53030" size={20}/>
         </Error>}

  </Container>
  )
}


export default Input;