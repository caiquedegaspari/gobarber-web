import React, { useCallback } from 'react';
import { Background, Container, Content } from './style';
import logo from '../../assets/logo.svg'
import { FiLogIn, FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import getValidationErrors from '../../utils/getValidationErrors';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  console.log(formRef)

  const handleSubmit = useCallback( async (data:Object) => {
    try{
      formRef.current?.setErrors({})
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('Email obrigatório').email('Email inválido'),
        password: Yup.string().min(6,'Mínimo de 6 caracteres')
      })
      await schema.validate(data, {
        abortEarly: false,
      });
      

    } catch(err){
      console.log(err)
      const errors = getValidationErrors(err)
      formRef.current?.setErrors(errors)
    }
  },[])
  return(
    <Container>
    <Background />

    <Content>
      <img src={logo} alt="GoBarber" />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Faça seu cadastro</h1>
        <Input name="name" icon={FiUser} placeholder="Nome"/>
        <Input name="email" icon={FiMail} placeholder="E-mail"/>
        <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>
        <Button type="submit">Cadastrar</Button>

      </Form>

      <a href="a">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
  )
}
export default SignUp;