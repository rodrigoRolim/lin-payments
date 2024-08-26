import { useCallback } from "react"
import LHint from "./LHint"
import './DateInput.scss'

export default function DateInput({ autoComplete, describedBy, label, hint, placeholder, value, setValue, inputMode }) {
  const handlerTextInput = useCallback((event) => {
    setValue(event.target.value)
  }, [value])

  return (
    <label className="date-input">
      <span className="label">{label}</span>
      <input
        className="input"
        type="date"
        aria-describedby={describedBy}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        value={value}
        onInput={handlerTextInput}
      />
      <LHint id={describedBy} text={hint.text} className="hints"/>
    </label>
  )
}