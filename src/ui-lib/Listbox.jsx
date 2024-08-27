import './Listbox.scss'

export default function Listbox({
  className,
  controls, 
  isOptionsVisible, 
  listboxOrientation, 
  options, 
  optionListEl, 
  selectedOption, 
  selectOption, 
}) {

  const Items = () => options.map(option => 
    (
      <li
        key={option.id}
        className="item"
        role="option"
        aria-selected={selectedOption.id === option.id}
        tabIndex="-1"
        onClick={() => selectOption(option.value)}
      >
        {option.value}
      </li>
    )
  )

  return (
    isOptionsVisible && 
    <ul
      className={`listbox ${listboxOrientation} ${className}`}
      id={controls}
      role="listbox"
      ref={optionListEl}
    >
      {Items()}
    </ul> 
  )
}