import { useCallback } from "react"
import glass from '../assets/glass.svg'
import './SearchInput.scss'

export default function SearchInput({ id, describedby, placeholder, autoComplete, setSearchTerms, searchTerms, onSearchTerms }) {
  const handlerInputSearch = useCallback((event) => {
    setSearchTerms(event.target.value)
  }, [searchTerms])

  return (
    <label className="search-input">
      <input
        className="input"
        type="text"
        aria-describedby={describedby}
        name={id}
        id={id}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={searchTerms}
        onInput={handlerInputSearch}
      />
      <button className="loopa" onClick={onSearchTerms}>
        <img src={glass} width="24" height="24" alt="icone de pesquisar por termos"/>
      </button>
    </label>
  )
}