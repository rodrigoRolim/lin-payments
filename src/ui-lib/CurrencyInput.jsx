import { useCallback, useEffect } from 'react';
import './CurrencyInput.scss';

export default function CurrencyInput({ 
  label, currencyValue, setCurrencyValue, ariaDescribedby, ariaLabelledby, placeholder, autocomplete 
}) {
  const PERIODICITY = 3
  const currencyFormats = Object.freeze({
    BRL: { symbol: 'R$', thousandSeparator: '.', decimalSeparator: ',', decimalPoints: 2 },
    USD: { symbol: '$', thousandSeparator: '.', decimalSeparator: ',', decimalPoints: 2 },
  })
  
  const handlerCurrencyValue = useCallback((event) => {
    const newCurrencyValue = convertTextTypeToCurrency(event.target.value)
    setCurrencyValue(newCurrencyValue)
  })

  useEffect(() => {
    handlerCurrencyValue({ target: { value: currencyValue || '000' } })
  }, [])

  const removeNonNumerics = (numericValue) => numericValue.replace(/[^0-9]+/g, '') 
  const prependCurrencySymbol = (currencyValue, code = 'BRL') => `${currencyFormats[code].symbol} ${currencyValue}`
  const getIntegerPart = (numericValue) => numericValue.split(',')[0]
  const getDecimalPart = (numericValue) => numericValue.split(',')[1]
  const calculateSeparatorCount = (integerPartLength) => Math.trunc((integerPartLength - 1) / PERIODICITY)
  const calculateInitialSeparatorPosition = (integerPartLength) => ((integerPartLength - 1) % PERIODICITY) + 1

  function addSeparators(numericValue, integerPartLength, decimalSepartor = ',', thousandSeparator = '.') {
    let newSeparatorPosition = 4
    let integerPart = getIntegerPart(numericValue)
    const decimalPart = getDecimalPart(numericValue)
    const separatorCount = calculateSeparatorCount(integerPartLength)
    let currentSeparatorPosition = calculateInitialSeparatorPosition(integerPartLength)

    if (integerPart.length < 4) {
      return numericValue
    }

    for(let i = 0; i < separatorCount; i++) {
      integerPart = integerPart.slice(0, currentSeparatorPosition) + thousandSeparator + integerPart.slice(currentSeparatorPosition)
      currentSeparatorPosition += newSeparatorPosition
      newSeparatorPosition += i
    }
   
    return integerPart + decimalSepartor + decimalPart
  }
  function convertToBRLCurrency(numericValue, code = 'BRL') {
    const genericCurrencyValue = (Number(numericValue) / 100).toFixed(2)
    const brlCurrencyValue = genericCurrencyValue.replace('.', ',')

    return brlCurrencyValue
  }
  function convertTextTypeToCurrency(inputValue, code = 'BRL') {
    const numericValue = removeNonNumerics(inputValue)
    const currencyValue = convertToBRLCurrency(numericValue)
    const formatedCurrencyValue = addSeparators(currencyValue, getIntegerPart(currencyValue).length)

    return prependCurrencySymbol(formatedCurrencyValue)
  }

  return (
    <label className="currency-input">
      <small className="label">{label}</small>
      <input 
        value={currencyValue}
        onInput={handlerCurrencyValue}
        spellCheck="false"
        type="text"
        inputMode="numeric"
        aria-describedby={ariaDescribedby}
        aria-labelledby={ariaLabelledby}
        placeholder={placeholder}
        autoComplete={autocomplete}
      />
    </label>
  )
}