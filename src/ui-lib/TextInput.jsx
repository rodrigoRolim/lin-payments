import { useCallback } from "react"
import LHint from "./LHint"
import './TextInput.scss'

export default function TextInput({ 
  autoComplete, 
  describedBy, 
  inputMode,
  readonly, 
  label, 
  hint, 
  placeholder, 
  value, 
  setValue, 
}) {
  const handlerTextInput = useCallback((event) => {
    setValue(event.target.value)
  }, [value])

  return (
    <label className="text-input">
      <span className="label">{label}</span>
      <input
        className="input"
        type="text"
        readOnly={readonly}
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
