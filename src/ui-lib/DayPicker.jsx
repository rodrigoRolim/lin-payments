import { useCallback } from "react"
import LHint from "./LHint"
import './DayPicker.scss'

export default function DayPicker({ autoComplete, describedBy, label, hint, placeholder, value, setValue }) {
  const handlerTextInput = useCallback((event) => {
    setValue(event.target.value)
  }, [value])

  return (
    <label className="day-picker">
      <span className="label">{label}</span>
      <input
        className="input"
        type="number"
        min={1}
        max={31}
        step={1}
        aria-describedby={describedBy}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode="numeric"
        value={value}
        onInput={handlerTextInput}
      />
      <LHint id={describedBy} text={hint.text} className="hints"/>
    </label>
  )
}
