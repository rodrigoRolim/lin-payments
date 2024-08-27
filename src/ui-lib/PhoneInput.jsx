import { useCallback } from "react"
import LHint from "./LHint"
import './PhoneInput.scss'

export default function PhoneInput({ autoComplete, describedBy, label, hint, placeholder, value, setValue, inputMode }) {
  const handlerTextInput = useCallback((event) => {
    setValue(event.target.value)
  }, [value])

  return (
    <label className="phone-input">
      <span className="label">{label}</span>
      <input
        className="input"
        type="tel"
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
