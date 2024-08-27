import ClientListItem from "./ClientListItem"

export default function ClientList({ clientList }) {
  return clientList.map(client => 
    <ClientListItem 
      fullname={client.fullname}
      age={client.age}
      totalDebt={client.totalDebt}
      contractedServicesQuantity={client.contractedServicesQuantity}
    />
  )
}
