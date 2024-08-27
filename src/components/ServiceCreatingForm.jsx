import CurrencyInput from "../ui-lib/CurrencyInput"
import DatePicker from "../ui-lib/DatePicker"
import DayPicker from "../ui-lib/DayPicker"
import LButton from "../ui-lib/LButton"
import LSelect from "../ui-lib/LSelect"
import TextInput from "../ui-lib/TextInput"

export default function ServiceCreatingForm({
  errors,
  setErrors
}) {
  const fieldValidations = {
    title: { text: '' },
    clientName: { text: '' },
    clientCpf: { text: '' },
    service: { text: '' },
    start: { text: '' },
    end: { text: '' }, // optional
    fee: { text: '' },
    installments: { text: '' },
    dueDate: { text: '' },
    paymentMethods: { text: '' }
  }
  
  const [validations, setValidation] = useState(fieldValidations)
  const [title, setTitle] = useState('')
  const [clientName, setClientName] = useState('')
  const [clientCpf, setClientCpf] = useState('')
  const [service, setService] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [fee, setFee] = useState('')
  const [installments, setInstallments] = useState('')
  const [chosenInstallment, setChoseInstallment] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [paymentMethods, setPaymentMethods] = useState('')
  const [serviceList, setServiceList] = useState([])

  const confirmServiceCreating = (event) => {
    event.preventDefault()
  }
  return (
    <form className="service-creating-form" onSubmit={confirmServiceCreating}>
      <TextInput label="título do contrato" hint={validations.title} value={title} setValue={setTitle} />
      <TextInput label="cpf do cliente" hint={validations.clientCpf} value={clientCpf} setValue={setClientCpf} />
      <TextInput label="nome do cliente" hint={validations.clientName} value={clientName} setValue={setClientName} readonly={true} />
      <LSelect label="serviço" hint={validations.service} options={serviceList} selected={service} setSelected={setService}/>
      <CurrencyInput label="valor do serviço" hint={validations.fee} value={fee} setValue={setFee} />
      <LSelect label="parcelas" hint={validations.installments} options={installments} selected={chosenInstallment} setSelected={setChoseInstallment} />
      <LSelect label="metódos de pagamento" hint={validations.paymentMethods} options={paymentMethods} setValue={setPaymentMethods} />
      <DatePicker label="inicio" hint={validations.start} value={start} setValue={setStart} />
      <DatePicker label="fim" hint={validations.end} value={end} setValue={setEnd} />
      <DayPicker label="Dia do Vencimento" hint={validations.dueDate} value={dueDate} setValue={setDueDate} />
      <LButton text="confirmar" />
    </form>
  )
}