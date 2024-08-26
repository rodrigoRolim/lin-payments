import './LTextArea.scss'

export default function TextArea({ label, name, rows, id, value, setValue }) {
  return (
    <label className="text-area">
      <small className="label">{label}</small>
      <textarea 
        className="field"
        spellCheck="false" 
        rows={rows}
        name={name}
        id={id}
        value={value}
        onInput={setValue}
      />
    </label>
  )
}