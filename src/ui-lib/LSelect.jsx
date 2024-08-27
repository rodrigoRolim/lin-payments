import { useCallback, useEffect, useRef, useState, useMemo } from "react"
import Listbox from "./Listbox"
import LHint from "./LHint"
import './LSelect.scss'

export default function LSelect({ 
  controls, 
  describedBy, 
  label, 
  labelledby, 
  options,
  selected,
  setSelected,
  hint,
}) {
  const LISTBOX_ORIENTATIONS = Object.freeze({
    down: 'down',
    up: 'up',
    modal: 'modal'
  })

  const [expanded, setExpanded] = useState(false)
  const [isOptionsVisible, setOptionsVisible] = useState(false)
  const [listboxOrientation, setListboxOrientation] = useState(LISTBOX_ORIENTATIONS.down)
  const [filteredOptions, setFilteredOptions] = useState(options)
  const [typedText, setTypedText] = useState('')
  const inputEl = useRef(null)
  const optionListEl = useRef(null)

  const selectOption = useCallback((value) => {
    const foundOption = findOptionByValue(value) ?? {}
    setSelected(foundOption)
    setTypedText(foundOption.value ?? '')
    closeOptionList()
  }, [])

  function filterOptionsByTypedText(event) {
    const typedText = event.target.value
    const optionsByTypedText = filterOptionsByValue(typedText)
    const foundOption = findOptionByValue(typedText) ?? {}
    setFilteredOptions(optionsByTypedText)
    setSelected(foundOption)
    setTypedText(typedText)
  }
  function filterOptionsByValue(value) {
    return options.filter(option => option.value.toLowerCase().includes(value.toLowerCase()))
  }
  function findOptionByValue(value) {
    return options.find(option => option.value.toLowerCase() === value.toLowerCase())
  }
  function openOptionList() {
    setOptionsVisible(true)
    setExpanded(true)
  }
  function closeOptionList() {
    setOptionsVisible(false)
    setExpanded(false)
  }
  function determineListboxOrientation() {
    console.log(optionListEl)
    const optionsListHeight = optionListEl.current.getBoundingClientRect().height
    const inputBoundingRectClient = inputEl.current.getBoundingClientRect()
    const inputElHeight = inputBoundingRectClient.height
    const inputBottomYPosition = inputBoundingRectClient.top + inputElHeight
    const documentHeight = document.body.offsetHeight

    return documentHeight - inputBottomYPosition > optionsListHeight
      ? LISTBOX_ORIENTATIONS.down
      : LISTBOX_ORIENTATIONS.up
  }
  function listenOutsideClick() {
    if (isOptionsVisible) {
      document.addEventListener('click', hiddenListWhenClickOutsideInput)
    }
  }
  function hiddenListWhenClickOutsideInput(event) {
    const wasClickedOutsideInput = !inputEl.current.contains(event.target)
    if (wasClickedOutsideInput) {
      closeOptionList()
      document.removeEventListener('click', hiddenListWhenClickOutsideInput)
    }
  }

  useEffect(() => {
    if (isOptionsVisible) {
      setListboxOrientation(determineListboxOrientation())
      listenOutsideClick()
    }
  }, [isOptionsVisible])

  return (
    <div 
      className="l-select"
      role="combobox"
      aria-expanded={expanded}
      aria-haspopup="listbox"
      aria-controls={controls}
      aria-labelledby={labelledby}
    >
      <small
        className="label" 
        id={labelledby}
      >
        {label}
      </small>
      <input 
        className="input"
        tabIndex="0"
        spellCheck="false"
        type="text"
        role="button"
        aria-describedby={describedBy}
        ref={inputEl}
        value={typedText}
        onClick={openOptionList}
        onInput={filterOptionsByTypedText}
      />
      <LHint id={describedBy} text={hint.text} className="hints"/>
      <Listbox
        className="options"
        isOptionsVisible={isOptionsVisible}
        options={filteredOptions}
        selectOption={selectOption}
        selectedOption={selected}
        listboxOrientation={listboxOrientation}
        controls={controls}
        optionListEl={optionListEl}
      />
    </div>
  )
}
