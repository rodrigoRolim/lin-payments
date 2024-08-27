import { useCallback } from "react"
import LHint from "./LHint"
import './PasswordInput.scss'

export default function PasswordInput({ autoComplete, describedBy, label, hint, placeholder, value, setValue, inputMode }) {
  const handlerTextInput = useCallback((event) => {
    setValue(event.target.value)
  }, [value])

  return (
    <label className="password-input">
      <span className="label">{label}</span>
      <input
        className="input"
        type="password"
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
