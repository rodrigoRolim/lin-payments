import TextInput from '../ui-lib/TextInput'
import EmailInput from '../ui-lib/EmailInput'
import DatePicker from '../ui-lib/DatePicker'
import PasswordInput from '../ui-lib/PasswordInput'

import { useState } from 'react'
import LButton from '../ui-lib/LButton'
import PhoneInput from '../ui-lib/PhoneInput'

export default function ClientCreating() {
  // fullname, email, cpf, birthdate, address and password
  const fieldValidations = {
    fullname: { text: '' },
    email: { text: '' },
    cpf: { text: '' },
    birthdate: { text: '' },
    password: { text: '' },
    phone: { text: '' }
  }
  
  const [validation, setValidation] = useState(fieldValidations)
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')

  const confirmClientCreating = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={confirmClientCreating}>
      <TextInput label="nome completo" hint={validation.fullname} value={fullname} setValue={setFullname} />
      <EmailInput label="email" hint={validation.email} value={email} setValue={setEmail} />
      <TextInput label="cpf" hint={validation.cpf} value={cpf} setValue={setCpf} />
      <DatePicker label="data de nascimento" hint={validation.birthdate} value={birthdate} setValue={setBirthdate} />
      <PasswordInput label="senha" hint={validation.password} value={password} setValue={setPassword} />
      <PhoneInput label="celular" hint={validation.phone} value={phone} setValue={setPhone} />
      <LButton text="confirmar" />
    </form>
  )
}