import './ClientListItem.scss'

export default function ClientListItem({ clientId, fullname, age, totalDebt, contractedServicesQuantity }) {
  return (
    <div className="client-list-item">
      <h1 className="fullname">{ fullname }</h1>
      <div className="age">idade: { age }</div>
      <div className="debt">dívida total: { totalDebt }</div>
      <div className="contracts">número de contratos ativos: { contractedServicesQuantity }</div>
    </div>
  )
}