import LHint from "./LHint"
import './EmailInput.scss'
import { useCallback } from "react"

export default function EmailInput({ autoComplete, describedBy, label, hint, placeholder, value, setValue, inputMode }) {
  const handlerTextInput = useCallback((event) => {
    setValue(event.target.value)
  }, [value])

  return (
    <label className="email-input">
      <span className="label">{label}</span>
      <input
        className="input"
        type="email"
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
