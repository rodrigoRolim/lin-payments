import { useCallback } from "react"
import LHint from "./LHint"
import './DatePicker.scss'

export default function DatePicker({ autoComplete, describedBy, label, hint, placeholder, value, setValue, inputMode }) {
  const handlerTextInput = useCallback((event) => {
    setValue(event.target.value)
  }, [value])

  return (
    <label className="datepicker">
      <span className="label">{label}</span>
      <input
        className="input"
        type="date"
        aria-describedby={describedBy}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        value={value}
        onChange={handlerTextInput}
      />
      <LHint id={describedBy} text={hint.text} className="hints"/>
    </label>
  )
}