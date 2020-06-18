import styled from 'styled-components'

export const Form = styled.form`
  padding: 20px;
  display:flex;
  flex-direction: column;
  justify-content:center;
`

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 8px;
  padding: 8px 4px;
`

export const Button = styled.button`
  background: #1632ED;
  color: white;
  padding: 8px;
  text-transform:uppercase;
  border-radius: 5px;
  margin-top: 10px;

  &[disabled]{
    opacity: 0.3;
  }
`

export const Title = styled.h3`
  text-align:center;
  padding: 20px 0;
`
export const Aviso = styled.p`
  text-align:center;
`

export const Accion = styled.span`
  color: #1632ED;
  cursor:pointer;
`

export const Error = styled.span`
  display:block;
  color:red;
  margin-bottom: 20px;
`
