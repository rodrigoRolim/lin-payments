import TextInput from "../ui-lib/TextInput"
import PhoneInput from "../ui-lib/PhoneInput"
import LSelect from "../ui-lib/LSelect"
import EmailInput from "../ui-lib/EmailInput"
import { useState } from "react"
import LButton from "../ui-lib/LButton"

export default function ServiceProviderCreating() {
  const fieldValidations = {
    companyName: { text: '' },
    cnpj: { text: '' },
    address: { text: '' },
    companyType: { text: '' },
    sector: { text: '' },
    stateRegistration: { text: '' },
    telphone: { text: '' },
    celphone: { text: '' },
    companyEmail: { text: '' }
  }
  
  const [validation, setValidation] = useState(fieldValidations)
  const [companyName, setCompanyName] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [address, setAddress] = useState('')
  const [companyType, setCompanyType] = useState('')
  const [sector, setSector] = useState('')
  const [stateRegistration, setStateRegistration] = useState('')
  const [telphone, setTelphone] = useState('')
  const [celphone, setCelphone] = useState('')
  const [companyEmail, setCompanyEmail] = useState('')
  const [options, setOptions] = useState([{ id: 0, value: 'MEI' }])
  
  const addNewServiceProvider = (event) => {
    event.preventDefault()
    
  }

  return (
    <form onSubmit={addNewServiceProvider}>
      <TextInput label="nome da empresa" hint={validation.companyName} value={companyName} setValue={setCompanyName} />
      <TextInput label="cnpj" hint={validation.cnpj} value={cnpj} setValue={setCnpj} />
      <TextInput label="endereço" hint={validation.address} value={address} setValue={setAddress} />
      <LSelect label="tipo de empresa" options={options} hint={validation.companyType} selected={companyType} setSelected={setCompanyType} />
      <TextInput label="setor de atuação" hint={validation.sector} value={sector} setValue={setSector} />
      <TextInput label="inscrição estadual" hint={validation.stateRegistration} value={stateRegistration} setValue={setStateRegistration} />
      <PhoneInput label="telefone fixo" hint={validation.telphone} value={telphone} setValue={setTelphone} />
      <PhoneInput label="telefone celular" hint={validation.celphone} value={celphone} setValue={setCelphone} />
      <EmailInput label="email corporativo" hint={validation.companyEmail} value={companyEmail} setValue={setCompanyEmail} />
      <LButton text="confirmar" />
    </form>
  )
}
// nome fantasia da empresa, cpnj, endereço da empresa, tipo de empresa (MEI, EPP, LTDA, SA) etc
// setor de atuação, Telefone fixo, telefone celular, email corporativo, website, Inscrição estadual, 
// Nome representante legal, cargo, telefone email
// Contrato social, Certidão de regularidades, licenças e alvaras, serviços fornecidos