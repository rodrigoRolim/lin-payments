import { useState } from "react"
import ClientList from "../components/ClientList"

export default function ClientManagement() {
  const [clientList, setClientList] = useState([{ fullname: 'rodrigo rolim veras', age: 32, totalDebt: 12356.90, contractedServicesQuantity: 3 }])

  return (
    <ClientList clientList={clientList} />
  )
}
