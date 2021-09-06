import React, { useCallback, useRef } from 'react';
import { Background, Container, Content } from './style';
import logo from '../../assets/logo.svg'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors';

import { useAuth } from '../../hooks/auth'
import { useToast } from '../../hooks/toast';

interface SignInFormData {
  email:string,
  password: string,
}
 
const SignIn: React.FC = () => {
  
  const formRef = useRef<FormHandles>(null)
  const { addToast } = useToast()
  const { signIn, user } = useAuth()
  console.log(user)
  const handleSubmit = useCallback( async (data:SignInFormData) => {
    try{
      formRef.current?.setErrors({})
      const schema = Yup.object().shape({
        email: Yup.string().required('Email obrigatório').email('Email inválido'),
        password: Yup.string().required('Senha obrigatória')
      })
      await schema.validate(data, {
        abortEarly: false,
      });
      
    await signIn({email: data.email, password: data.password})
    } catch(err){
      if(err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors)
      }
    addToast({
      type: 'error',
      title: 'Erro na autenticação',
      description: 'Ocorreu um erro ao fazer login, cheque as credenciais'
    })
    }
  },[signIn, addToast]
);
 
  return (
    <Container>
    <Content>
      <img src={logo} alt="GoBarber" />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Faça seu logon</h1>

        <Input name="email" icon={FiMail} placeholder="E-mail"/>
        <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </Form>

      <a href="a">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
  )
}

export default SignIn;